import { Component, OnInit } from '@angular/core';
import {Employment} from "../model/employment";
import {AuthService} from "../service/auth.service";
import {RecruitmentPost} from "../model/RecruitmentPost";
import {EmployerService} from "../service/employer.service";
import {TokenService} from "../service/token.service";
import {PageEvent} from "@angular/material/paginator";
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employers : Employment[]=[];
  recruitmentPost1 : RecruitmentPost[] = [];
  recruitmentPost2 : RecruitmentPost[] = [];


  constructor(private authService: AuthService, private  employerService: EmployerService,  private tokenService: TokenService) { }

  ngOnInit(): void {
    this.listRecruitmentBySalaryHot()
    this.listRecruitmentByFieldHot()
    this.getListTopCompany()
  }


  getListTopCompany(){
    this.authService.listTopCompany().subscribe(data=>{
      this.employers = data;
      console.log(data)
    })
  }
  listRecruitmentBySalaryHot(){
    this.authService.listRecruitmentBySalaryHot().subscribe(data=>{
      this.recruitmentPost1 = data;
      console.log(data)
    })
  }
  listRecruitmentByFieldHot(){
    this.authService.listRecruitmentByFieldHot().subscribe(data=>{
      this.recruitmentPost2 = data;
      console.log(data)
    })
  }
  dulieu(dl1:any,dl2:any){
    console.log(dl1);
    console.log(dl2);
  }




}
