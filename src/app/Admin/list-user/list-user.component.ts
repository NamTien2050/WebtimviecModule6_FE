import {Component, OnInit, ViewChild} from '@angular/core';
import {SignUpForm} from "../../model/SingUpForm";
import {MatPaginator} from "@angular/material/paginator";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {MatTableDataSource} from "@angular/material/table";
import {RecruitmentPost} from "../../model/RecruitmentPost";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nameUser', 'email',  'lock','delete'];
  dataSource: any;
  users : SignUpForm[] = [];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(private authService: AuthService, private tokenService: TokenService) { }

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

}
