import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {RecruitmentPost} from "../model/RecruitmentPost";
import {EmployerService} from "../service/employer.service";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-recruitment-post-list',
  templateUrl: './recruitment-post-list.component.html',
  styleUrls: ['./recruitment-post-list.component.scss']
})
export class RecruitmentPostListComponent implements OnInit  {

  lock: any;
  displayedColumns: string[] = ['id', 'title', 'quantity', 'position','experience', 'date', 'delete', 'active'];
  dataSource: any;
  recruitmentPost: RecruitmentPost[]=[];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(private employerService: EmployerService,
              private dialog: MatDialog) { }
  ngOnInit(): void {
    this.getRecruitmentPostList();
  }
  getRecruitmentPostList(){
    this.employerService.getRecruitmentPostList().subscribe(recruitmentPost =>{
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
      this.lock='Bài đăng đang mở'

  }

  lockPost(id: number) {
      this.lock='Bài đăng đang đóng'
  }
}




