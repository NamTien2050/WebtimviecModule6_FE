import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {EmployerService} from "../../service/employer.service";
import {Employment} from "../../model/employment";
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {FieldList} from "../../model/FieldList";
import {PageEvent} from "@angular/material/paginator";
import {Search} from "../../model/search";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  value : Search ={}
  checkValue = true;
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
  //  this.field = window.sessionStorage.getItem("field")
   // console.log('kiểm tra gửi data====>',this.field)
    this.authService.search$.subscribe(data => {
      this.field =data;

    })
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
    this.field = null;
    this.pageRecruitmentByField1({page: 0, size: 5})
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
  pageRecruitmentByField1(nextPage: { page?: number; size?: number; },) {
    {
      this.authService.search$.subscribe(data => {
        // @ts-ignore
        if(data['totalElements']==0){
          this.checkValue = false;
        }

        console.log("dddđ",data)
        // @ts-ignore
        this.recruitmentPosts = data['content']
        // @ts-ignore
        this.totalElements = data['totalElements']
      })
    }
  }

  dulieu(dl1:any,dl2:any,dl3:any){
    this.value.title = dl1;
    this.value.location = dl2;
    this.value.salary = Number(dl3);
    console.log(dl1);console.log(dl2);console.log(dl3)
    console.log(this.value)
    this.authService.test(this.value).subscribe(data => {
      if(data['totalElements']==0){
        this.checkValue = false;
      }

      console.log("dddđ",data)
      // @ts-ignore
      this.recruitmentPosts = data['content']
      // @ts-ignore
      this.totalElements = data['totalElements']


    });

  }
  dulieu1(dl1:any){
    this.authService.test1(dl1).subscribe(data => {
      if(data['totalElements']==0){
        this.checkValue = false;
      }

      console.log("dddđ",data)
      // @ts-ignore
      this.recruitmentPosts = data['content']
      // @ts-ignore
      this.totalElements = data['totalElements']

    })
  }



}
