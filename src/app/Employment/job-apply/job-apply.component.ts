import { Component, OnInit } from '@angular/core';
import {EmployerService} from "../../service/employer.service";
import {TokenService} from "../../service/token.service";
import {UserProfile} from "../../model/user-profile";

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {
  UserProfile?: UserProfile[]= [];

  constructor(private employerService: EmployerService,private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getUserProfile()
  }
  getUserProfile(){
    const id = this.tokenService.getId()
    // @ts-ignore
    this.employerService.getUserProfileOfEmployment(id).subscribe(data => {
      console.log(data)

    })

  }

}
