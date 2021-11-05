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

  constructor(private authService: AuthService,private tokenService: TokenService) { }

  ngOnInit() {
    this.getEmploymentByUser();
    this.getUserById();
  }
  getEmploymentByUser(){
    const id = this.tokenService.getID();
    // @ts-ignore
    this.authService.getEmploymentByUser(id).subscribe(data => {
      if(data.status) {
        this.Employment = data;
      }
    })

  }
  getUserById(){
    const id = this.tokenService.getID()
    // @ts-ignore
    this.authService.getUserbyUserId(id).subscribe(data => {
      this.User = data;
    })
  }

}
