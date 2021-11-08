import { Component, OnInit } from '@angular/core';
import {UserProfile} from "../../model/user-profile";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {RecruitmentPost} from "../../model/RecruitmentPost";

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.scss']
})
export class DetailProfileComponent implements OnInit {
  UserProfile?: UserProfile;

  constructor(private authService: AuthService, private tokenService: TokenService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserProfile()
  }
  getUserProfile() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.authService.getUserProfileById(paramMap.get('id')).subscribe(data=>{
        this.UserProfile = data;
        console.log(data)

      })



    })


  }

}
