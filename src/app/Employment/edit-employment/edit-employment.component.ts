import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-employment',
  templateUrl: './edit-employment.component.html',
  styleUrls: ['./edit-employment.component.scss']
})
export class EditEmploymentComponent implements OnInit {
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
  employmentForm :any;

  constructor(private authService: AuthService,private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getEmployment();
  }
  getEmployment(){
    const id = this.tokenService.getId()
    // @ts-ignore
    this.authService.getEmploymentByUser(id).subscribe(data => {
      this.employmentForm = new FormGroup({
        id : new FormControl(data.id),
        name : new FormControl(data.name),
        image1 : new FormControl(data.image1),
        image : new FormControl(data.image),
        email : new FormControl(data.email),
        staffNumber : new FormControl(data.staffNumber),
        location : new FormControl(data.location),
        address : new FormControl(data.address),
        field : new FormControl(data.field),
        date : new FormControl(data.date),
        description : new FormControl(data.description),
        facebookLink : new FormControl(data.facebookLink),
        phone : new FormControl(data.phone),
      })
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
  submit(){
    const id = this.tokenService.getId()
    const Employment = this.employmentForm.value;
    this.employmentForm.value.image = this.value
    this.employmentForm.value.image1 = this.value1
    // @ts-ignore
    this.authService.createEmployment(Employment,id).subscribe(data => {
      this.status = "Sửa hồ sơ thành công, vui lòng chờ hệ thống xác nhận";
    })

  }

}
