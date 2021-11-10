import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {SignUpForm} from "../../model/SingUpForm";
import {TokenService} from "../../service/token.service";
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  status = 'Please fill in the form to register!';
  id_role :any;
  newColor = false;
  newColor2= false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  usernameFormControl = new FormControl(
    '', [
      Validators.required,
     ]
  )
  userForm : FormGroup = new FormGroup(
    {
      name : new FormControl(),
      username : new FormControl(),
      password : new FormControl(),
      email : new FormControl(),
    }
  )
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
    const AppUser = this.userForm.value;
    console.log(AppUser);
    const id = this.id_role;
    this.authService.register(AppUser,id).subscribe(data =>{
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
  NTV(){
    this.id_role =3;
    console.log(this.id_role);
    this.newColor = !this.newColor;
    this.newColor2 = false;
  }
  DN(){
    this.id_role =2;
    console.log(this.id_role);
    this.newColor2 = !this.newColor2;
    this.newColor = false;
  }

  toggleColor() {
    this.newColor = !this.newColor;
  }

}
