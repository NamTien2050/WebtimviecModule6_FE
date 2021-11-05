import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {SignInForm} from "../../model/SignInForm";
import {SignUpForm} from "../../model/SingUpForm";
import {UserProfile} from "../../model/user-profile";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  UserProfile?: UserProfile;
  User?: SignUpForm;

  constructor(private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getUserProfile()
    this.getUserById();
  }
  getUserProfile(){
    const id = this.tokenService.getID()
    // @ts-ignore
    this.authService.getUserProfile(id).subscribe(data => {
      this.UserProfile = data;
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
