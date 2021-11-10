import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {EmployerService} from "../../service/employer.service";
import {Employment} from "../../model/employment";
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {FieldList} from "../../model/FieldList";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  employer?: Employment;
  totalElements: number = 0;
  recruitmentPosts: RecruitmentPost[] = [];
  checkLogin: any;
  checkLogin1: any;
  fieldList: FieldList[] = [];
  field: any;

  constructor(private authService: AuthService,private employerService: EmployerService,
              private tokenService: TokenService,) { }

  ngOnInit(): void {
    this.field = window.sessionStorage.getItem("field")
    console.log('kiểm tra gửi data====>',this.field)
    this.getFieldList()
    // this.field = this.employerService.getData();

    console.log('kiem tra field===', this.field)
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
    this.pageRecruitmentByField({page: 0, size: 5}, this.field)
    this.authService.search$.subscribe(data => {
      console.log(data)
    })
  }
  getFieldList(){
    this.employerService.getFieldList().subscribe(fieldList=>{
      this.fieldList= fieldList;
    })
  }
  getResult(event: any){
    this.field = event;
    console.log(event);
    this.pageRecruitmentByField({page: 0, size: 5}, this.field);
  }

  pageRecruitmentByField(nextPage: { page?: number; size?: number; }, field: any) {
    this.employerService.pageRecruitmentPostByField(nextPage, field).subscribe(data => {
      console.log('data search theo field --> ', data);

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
    this.pageRecruitmentByField(nextPage, this.field);
  }

}
