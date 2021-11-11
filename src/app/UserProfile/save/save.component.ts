import {Component, OnInit, ViewChild} from '@angular/core';
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {MatPaginator} from "@angular/material/paginator";
import {EmployerService} from "../../service/employer.service";
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../service/token.service";
import {MatTableDataSource} from "@angular/material/table";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'quantity', 'position','experience', 'date', 'status'];
  dataSource: any;
  recruitmentPost: RecruitmentPost[]=[];
  isStatus = false;
  idDetail?:number;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(private employerService: EmployerService,private authService: AuthService,
              private dialog: MatDialog,private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.getRecruitmentPostList();
  }

  getRecruitmentPostList(){
    const id = this.tokenService.getId();
    // @ts-ignore
    this.authService.listSave(id).subscribe(recruitmentPost =>{
      this.recruitmentPost = recruitmentPost;
      console.log('list = > ', this.recruitmentPost);
      this.dataSource = new MatTableDataSource<RecruitmentPost>(this.recruitmentPost);
      this.dataSource.paginator = this.paginator;
    })
  }

}
