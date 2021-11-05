import { Component, OnInit } from '@angular/core';
import {SignInForm} from "../../model/SignInForm";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  status : any;
  hide = true;
  form: any = {};
  error1: any = {
    message: "Wrong email or password or not verification"
  }
  signInForm?: SignInForm;
  checkRegister = false;
  checkLoginFailed = false;
  constructor(  private authService: AuthService,
                private tokenService: TokenService,
                private router: Router) { }

  ngOnInit(): void {
    if(this.authService.getData()){
      this.checkRegister = true;
    }
  }
  ngSubmit(){
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    )
    this.authService.login(this.signInForm).subscribe(data =>{
      if(data.token!=undefined){
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.username);
        this.tokenService.setRole(data.role);
        this.tokenService.setId(data.user_id);
        this.router.navigate(['AllPost']).then(()=>{
          window.location.reload();
        })
      }
    },error => {
      this.checkLoginFailed = true;
      this.status = "Wrong email or password or not verification";

    })
  }

}
