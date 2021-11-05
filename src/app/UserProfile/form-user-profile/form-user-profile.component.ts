import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-form-user-profile',
  templateUrl: './form-user-profile.component.html',
  styleUrls: ['./form-user-profile.component.scss']
})
export class FormUserProfileComponent implements OnInit {
  status :any;
  value: any;
  value1 :any;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  name = new FormControl('', [
    Validators.required,
  ]);
  address = new FormControl('', [
  ]);
  matcher = new MyErrorStateMatcher();

  UserProfileForm : FormGroup = new FormGroup(
    {
      name : new FormControl(),
      age :new FormControl(),
      image : new FormControl(),
      image1 : new FormControl(),
      gender : new FormControl(),
      address :new FormControl(),
      phone :new FormControl(),
      description :new FormControl(),
      level : new FormControl(),
      field : new FormControl(),
      desiredSalary : new FormControl(),
      motto : new FormControl(),
    }
  )

  constructor(private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit(): void {
  }
  onChangeAvatar($event:any){
    console.log('avatar --> ', $event);
    this.value = $event;
  }
  onChangeAvatar1($event:any){
    console.log('avatar --> ', $event);
    this.value1= $event;
  }
  submit(){
    const id = this.tokenService.getID()
    const UserProfileForm = this.UserProfileForm.value;
    this.UserProfileForm.value.image = this.value;
    this.UserProfileForm.value.image1 = this.value1
    // @ts-ignore
    this.authService.createUserProfile(UserProfileForm,id).subscribe(data => {
      this.status = "Đăng kí thành công, vui lòng chờ hệ thống xác nhận";
    })
  }

}
