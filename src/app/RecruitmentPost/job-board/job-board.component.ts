import { Component, OnInit } from '@angular/core';
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {Employment} from "../../model/employment";
import {EmployerService} from "../../service/employer.service";
import {PageEvent} from "@angular/material/paginator";
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent implements OnInit {

  employer?: Employment;
  totalElements: number = 0;
  recruitmentPosts :RecruitmentPost[] = [];
  employers?: Employment[] = [];
  arrEmployers: Array<Employment> = [];
  recruitmentPost?: RecruitmentPost;
  checkLogin: any;
  checkLogin1: any;

  constructor(private employerService: EmployerService,
              private tokenService: TokenService,) {  }

  ngOnInit(): void {
    const role = this.tokenService.getRole();
    console.log("kiểm tra role=======", role)
    if (role == "ROLE_USER") {
      this.checkLogin = 1;
    } else if (role == "ROLE_EMPLOYMENT" || role == "ROLE_ADMIN") {
      this.checkLogin = 2;
    } else {
      this.checkLogin = 3
    }

    if (role == null) {
      this.checkLogin1 = false;
    } else {
      this.checkLogin1 = true;
    }
    this.pageRecruitmentPost({page:0, size: 5})
  }
  pageRecruitmentPost(nextPage: { page?: number; size?: number; }){
    console.log('goi ham page')
    this.employerService.pageRecruitmentPost(nextPage).subscribe(data =>{
      console.log('data --> ',data);
      // @ts-ignore
      this.recruitmentPosts = data['content']
      // for (let i = 0; i < this.recruitmentPosts.length; i++) {
      //  // @ts-ignore
      // this.employerService.getEmployerDetailByAppUser_Id(this.recruitmentPosts[i].appUser.id).subscribe(result=>{
      //   this.employer =result;
      //
      //   // @ts-ignore
      //   this.arrEmployers.push(this.employer[i])
      //   console.log('mang employers --> ', this.arrEmployers)
      //   console.log("test lay du lieu",this.employer)
      // })
      // }
      // @ts-ignore
      this.totalElements = data['totalElements']
    })
  }
  nextPage(event: PageEvent) {
    console.log('event -->', event);
    const nextPage = {};
    // @ts-ignore
    nextPage['page'] = event.pageIndex.toString();
    // @ts-ignore
    nextPage['size'] = event.pageSize.toString();
    // @ts-ignore
    console.log('request[size]', nextPage['size']);
    this.pageRecruitmentPost(nextPage);
  }
}
