import {Component, OnInit, ViewChild} from '@angular/core';
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {MatPaginator} from "@angular/material/paginator";
import {EmployerService} from "../../service/employer.service";
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../service/token.service";
import {DialogComponent} from "../../Admin/dialog/dialog.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-recruitment-post-list',
  templateUrl: './recruitment-post-list.component.html',
  styleUrls: ['./recruitment-post-list.component.scss']
})
export class RecruitmentPostListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'quantity', 'position','experience', 'date', 'delete', 'status','listUserProfile'];
  dataSource: any;
  recruitmentPost: RecruitmentPost[]=[];
  isStatus = false;
  idDetail?:number;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(private employerService: EmployerService,
              private dialog: MatDialog,private tokenService: TokenService ) { }
  ngOnInit(): void {
    this.getRecruitmentPostList()
  }
  getRecruitmentPostList(){
    const id = this.tokenService.getId();
    // @ts-ignore
    this.employerService.getRecruitmentPostList(id).subscribe(recruitmentPost =>{
      this.recruitmentPost = recruitmentPost;
      console.log('list = > ', this.recruitmentPost);
      this.dataSource = new MatTableDataSource<RecruitmentPost>(this.recruitmentPost);
      this.dataSource.paginator = this.paginator;
    })
  }
  deleteRecruitmentPost(id: number) {
    this.employerService.deleteRecruitmentPost(id).subscribe(() =>{
      // window.location.reload();
      this.getRecruitmentPostList();

    })
  }
  openDialog(id:number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteRecruitmentPost(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  unlockPost(id: number) {
    this.employerService.detailRecruitmentPost(id).subscribe(oneStatus =>{
      this.isStatus = oneStatus.status;
    })
    this.isStatus = !this.isStatus;
    this.employerService.checkLockPost(id, this.isStatus).subscribe(data =>{
      console.log('dât====',data)
      this.getRecruitmentPostList()

    })
  }

  lockPost(id: number) {
    this.employerService.checkLockPost(id, this.isStatus).subscribe(data =>{
      console.log('data ==> ', data)
      this.getRecruitmentPostList()
    })
  }
  Post(id :any){
    window.sessionStorage.setItem("id_post",id);
  }
}
