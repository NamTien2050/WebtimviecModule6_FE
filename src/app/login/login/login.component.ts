import { Component, OnInit } from '@angular/core';
import {SignInForm} from "../../model/SignInForm";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  status : any;
  userForm : FormGroup = new FormGroup(
    {
      username : new FormControl(),
      password : new FormControl(),
    }
  )

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
    const AppUser = this.userForm.value;
    this.authService.login(AppUser).subscribe(data =>{
      if(data.token!=undefined){
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.username);
        this.tokenService.setRole(data.role);
        this.tokenService.setId(data.user_id);
        this.router.navigate(['home']).then(()=>{
          window.location.reload();
        })
      }
    },error => {
      this.checkLoginFailed = true;
      this.status = "Wrong email or password or not verification";

    })
  }

}
