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
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {
  status :any;
  value: any;
  value1: any;
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
  employmentForm : FormGroup = new FormGroup(
    {
      name : new FormControl(),
      image : new FormControl(),
      image1 : new FormControl(),
      staffNumber : new FormControl(),
      address :new FormControl(),
      location :new FormControl(),
      email :new FormControl(),
      description :new FormControl(),
      phone : new FormControl(),
      date : new FormControl(),
      facebookLink :new FormControl(),
      field : new FormControl(),
    }
  )

  constructor(private authService: AuthService,private tokenService: TokenService) { }

  ngOnInit(): void {
  }
  submit(){
    const id = this.tokenService.getID()
    const Employment = this.employmentForm.value;
    this.employmentForm.value.image = this.value
    this.employmentForm.value.image1 = this.value1
    // @ts-ignore
    this.authService.createEmployment(Employment,id).subscribe(data => {
      this.status = "Đăng kí thành công, vui lòng chờ hệ thống xác nhận";
    })

  }
  onChangeAvatar($event:any){
    console.log('avatar --> ', $event);
    this.value = $event;
  }
  onChangeAvatar1($event:any){
    console.log('avatar --> ', $event);
    this.value1 = $event;
  }


}
