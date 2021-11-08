import { Component, OnInit } from '@angular/core';
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {ActivatedRoute} from "@angular/router";
import {EmployerService} from "../../service/employer.service";
import {TokenService} from "../../service/token.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-detail-recruiment-post',
  templateUrl: './detail-recruiment-post.component.html',
  styleUrls: ['./detail-recruiment-post.component.scss']
})
export class DetailRecruimentPostComponent implements OnInit {
  status :any;
  form: any = {};
  recruitmentPost?: RecruitmentPost;

  constructor(private atRouter: ActivatedRoute,private  authService: AuthService,
              private employerService: EmployerService,private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    const role = this.tokenService.getRole();
    console.log(role)
    if(role == "ROLE_USER"){
      this.status = true;
    }else {
      this.status = false;
    }
    this.atRouter.paramMap.subscribe(ctgId => {
      const id = Number(ctgId.get('id'));
      console.log(id)
      this.authService.detailRecruitmentPost(id).subscribe(res => {
        this.recruitmentPost = res;
        console.log(this.recruitmentPost)

      });
    });
  }
  Recruitment(id:number){
    const id_user = this.tokenService.getId();
    // @ts-ignore
    this.authService.recruitment(id_user,id).subscribe(data => {
      window.confirm("Đã gửi hồ sơ ứng tuyển")
    })
  }

}
