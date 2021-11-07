import {Component, OnInit} from '@angular/core';
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {ActivatedRoute} from "@angular/router";
import {EmployerService} from "../../service/employer.service";
import {TokenService} from "../../service/token.service";
import {AuthService} from "../../service/auth.service";
import {Employment} from "../../model/employment";

@Component({
  selector: 'app-detail-recruiment-post',
  templateUrl: './detail-recruiment-post.component.html',
  styleUrls: ['./detail-recruiment-post.component.scss']
})
export class DetailRecruimentPostComponent implements OnInit {
  status: any;
  form: any = {};
  recruitmentPost?: RecruitmentPost;
  employment?: Employment;
  checkLogin: any;
  checkLogin1 =false;

  constructor(private atRouter: ActivatedRoute, private authService: AuthService,
              private employerService: EmployerService, private tokenService: TokenService
  ) {
  }

  ngOnInit(): void {
    const role = this.tokenService.getRole();
    console.log(role)
    if (role == "ROLE_USER") {
      this.status = true;
    } else {
      this.status = false;
    }

    if (role ==null) {
      this.checkLogin1 = true;
    }

    if (role == "ROLE_USER") {
      this.checkLogin = 1;
    } else if (role == "ROLE_EMPLOYMENT" || role == "ROLE_ADMIN") {
      this.checkLogin = 2;
    } else {
      this.checkLogin = 3
    }

    this.atRouter.paramMap.subscribe(ctgId => {
      const id = Number(ctgId.get('id'));
      console.log(id)
      this.employerService.detailRecruitmentPost(id).subscribe(res => {
        this.recruitmentPost = res;
        console.log(this.recruitmentPost)

      });
      this.employerService.getEmployerDetailByAppUser_Id(id).subscribe(a =>{
        this.employment = a;
      })
    });
  }

  Recruitment(id: number) {
    const id_user = this.tokenService.getID();
    // @ts-ignore
    this.authService.recruitment(id_user, id).subscribe(data => {
      window.confirm("Đã gửi hồ sơ ứng tuyển")
    })
  }

}
