import {Component, OnInit, ViewChild} from '@angular/core';
import {SignUpForm} from "../../model/SingUpForm";
import {MatPaginator} from "@angular/material/paginator";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {MatTableDataSource} from "@angular/material/table";
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nameUser', 'email',  'lock','delete'];
  dataSource: any;
  users : SignUpForm[] = [];
  isStatus = false;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(private authService: AuthService, private tokenService: TokenService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getlistUser();
  }
  getlistUser(){
    this.authService.showAllUser().subscribe(data=>{
      this.users = data;
      // @ts-ignore
      this.dataSource = new MatTableDataSource<RecruitmentPost>(this.users);
      this.dataSource.paginator = this.paginator;
    })
  }
  // unlockPost(id: number) {
  //   this.employerService.detailRecruitmentPost(id).subscribe(oneStatus =>{
  //     this.isStatus = oneStatus.status;
  //   })
  //   this.isStatus = !this.isStatus;
  //   this.employerService.checkLockPost(id, this.isStatus).subscribe(data =>{
  //     console.log('dât====',data)
  //     this.getRecruitmentPostList()
  //
  //   })
  // }
  //
  // lockPost(id: number) {
  //   this.employerService.checkLockPost(id, this.isStatus).subscribe(data =>{
  //     console.log('data ==> ', data)
  //     this.getRecruitmentPostList()
  //   })
  // }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.authService.deleteUser(id).subscribe(data => {
          this.getlistUser()

        });
      }
      console.log(`Dialog result: ${result}`);
    });
  }

}
