import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Employment} from "../../model/employment";
import {SignUpForm} from "../../model/SingUpForm";

@Component({
  selector: 'app-employment-detail',
  templateUrl: './employment-detail.component.html',
  styleUrls: ['./employment-detail.component.scss']
})
export class EmploymentDetailComponent implements OnInit {
  User?: SignUpForm;
  Employment ?: Employment;
  status = false;
  role = false;

  constructor(private authService: AuthService,private tokenService: TokenService) { }

  ngOnInit() {
    console.log('email',this.tokenService.getEmail())
    this.getEmploymentByUser();
    this.getUserById();
    if(this.tokenService.getRole()=='ROLE_EMPLOYMENT'){
      this.role = true;
    }
  }
  getEmploymentByUser(){
    const id = this.tokenService.getId();
    // @ts-ignore
    this.authService.getEmploymentByUser(id).subscribe(data => {
      console.log(data);
      if(data.status) {
        this.Employment = data;
      }
    })

  }
  getUserById(){
    const id = this.tokenService.getId()
    const role = this.tokenService.getRole();
    if(role != "ROLE_EMPLOYMENT"){
      this.status = true;
    }
    // @ts-ignore
    this.authService.getUserbyUserId(id).subscribe(data => {
      this.User = data;
    })
  }

}
