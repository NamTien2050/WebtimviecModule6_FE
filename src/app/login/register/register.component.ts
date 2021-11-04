import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {SignUpForm} from "../../model/SingUpForm";
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  status = 'Please fill in the form to register!';
  form: any = {};
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  signUpForm?: SignUpForm;
  error1: any = {
    message: "no_user"
  }
  error2: any = {
    message: "no_email"
  }
  success: any = {
    message: "yes"
  }
  constructor(private authService: AuthService, private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.tokenService.getId())
  }
  register(){
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    )
    this.authService.register(this.signUpForm).subscribe(data =>{
      console.log('data == ', data);
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status = 'The username is existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status = 'The email is existed! Please try again!'
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status = 'Create account success!'
        this.authService.setData(true);
        this.router.navigate(['login']).then(()=>{
          window.location.reload();
        })
      }
    }, error => {
      alert('khong thanh cong')
    })
  }

}
