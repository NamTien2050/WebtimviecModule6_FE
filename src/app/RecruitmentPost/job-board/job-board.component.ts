import {Component, OnInit} from '@angular/core';
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {Employment} from "../../model/employment";
import {EmployerService} from "../../service/employer.service";
import {PageEvent} from "@angular/material/paginator";
import {TokenService} from "../../service/token.service";
import {FieldList} from "../../model/FieldList";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent implements OnInit {

  employer?: Employment;
  totalElements: number = 0;
  recruitmentPosts: RecruitmentPost[] = [];
  employers?: Employment[] = [];
  arrEmployers: Array<Employment> = [];
  recruitmentPost?: RecruitmentPost;
  checkLogin: any;
  checkLogin1: any;
  fieldList: FieldList[] =[];

  constructor(private employerService: EmployerService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    const role = this.tokenService.getRole();
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
    this.pageRecruitmentPost({page: 0, size: 5})

  this.getFieldList()
  }
  getFieldList(){
    this.employerService.getFieldList().subscribe(fieldList=>{
      this.fieldList= fieldList;
      console.log("fieldList=====>", this.fieldList)
    })
  }
  pageRecruitmentPost(nextPage: { page?: number; size?: number; }) {
    console.log('goi ham page')
    this.employerService.pageRecruitmentPost(nextPage).subscribe(data => {
      console.log('data --> ', data);
      // @ts-ignore
      this.recruitmentPosts = data['content']
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


  findByJob(a: number) {
      let b
    for (let i = 0; i < this.fieldList.length; i++) {
       b = this.fieldList[a]
    }
    // @ts-ignore
    window.sessionStorage.setItem("field",b )
    console.log('kiem tra b====', b)
   this.router.navigate(['/search'])
  }
}
