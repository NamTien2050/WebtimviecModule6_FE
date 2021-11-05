import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TokenService} from "../../service/token.service";
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {
  value: any;
  value1: any;
  status: any;
  name = new FormControl('', [
    Validators.required,
  ]);
  address = new FormControl('', [
  ]);
  matcher = new MyErrorStateMatcher();
  onChangeAvatar($event:any){
    console.log('avatar --> ', $event);
    this.value = $event;
  }
  onChangeAvatar1($event:any){
    console.log('avatar --> ', $event);
    this.value1= $event;
  }


  formUserProfile : any ;

  constructor(private auth : AuthService, private router: Router,
              private tokenService: TokenService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserProfile()
  }
  getUserProfile(){
      const id = this.tokenService.getID()
      // @ts-ignore
      this.auth.getUserProfile(id).subscribe(data=>{
        this.formUserProfile = new FormGroup({
          id : new FormControl(data.id),
          name : new FormControl(data.name),
          age : new FormControl(data.age),
          gender : new FormControl(data.gender),
          phone : new FormControl(data.phone),
          level : new FormControl(data.level),
          desiredSalary : new FormControl(data.desiredSalary),
          address : new FormControl(data.address),
          field : new FormControl(data.field),
          motto : new FormControl(data.motto),
          description : new FormControl(data.description),
          image : new FormControl(data.image),
          image1 : new FormControl(data.image1),
        })

      })

  }
  submit(){
    const id = this.tokenService.getID()
    const UserProfileForm = this.formUserProfile.value;
    this.formUserProfile.value.image = this.value;
    this.formUserProfile.value.image1 = this.value1
    console.log(UserProfileForm)
    // @ts-ignore
    this.auth.createUserProfile(UserProfileForm,id).subscribe(data => {
      this.status = "Sửa hồ sơ thành công";
    })
  }


}
