import { Component, OnInit } from '@angular/core';
import {EmployerService} from "../../service/employer.service";
import {TokenService} from "../../service/token.service";
import {RecruitmentPost} from "../../model/RecruitmentPost";

@Component({
  selector: 'app-create-recruitment-post',
  templateUrl: './create-recruitment-post.component.html',
  styleUrls: ['./create-recruitment-post.component.scss']
})
export class CreateRecruitmentPostComponent implements OnInit {
  form: any = {};
  check: any;
  recruitmentPost?: RecruitmentPost;
  nofi1 = 'Hoàn thành form để có thể tạo tin mới '
  startDate = new Date(Date.now());
  success: any = {
    message: "create_success"
  }

  experiences: Experience[] = [
    {value: 'under a year', viewValue: 'Dưới 1 năm'},
    {value: 'from 1 to 3 years', viewValue: 'Từ 1 đến 3 năm'},
    {value: 'from 3 to 5 years', viewValue: 'Từ 3 đến 5 năm'},
    {value: 'above 5 years', viewValue: 'Trên 5 năm'},
  ];

  genders: Gender[] = [
    {value: 'Male', viewValue: 'Nam'},
    {value: 'Female', viewValue: 'Nữ'},
    {value: 'Both', viewValue: 'Không phân biệt'},
  ]


  user_id: any;

  constructor(private employerService: EmployerService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.user_id = this.tokenService.getID()
  }

  ngSubmit() {

    this.recruitmentPost = new RecruitmentPost(
      this.form.title,
      this.form.minSalary,
      this.form.maxSalary,
      this.form.quantity,
      this.form.gender,
      this.form.skill,
      this.form.workType,
      this.form.position,
      this.form.experience,
      this.form.date,
      this.form.field,
      this.form.location,
      this.form.description,
      this.form.status = true,
      this.form.appUser={id: this.user_id},
    )
    console.log(this.form.user_id)
    this.employerService.createRecruitmentPost(this.recruitmentPost).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.form.title = '',
          this.form.minSalary = '',
          this.form.maxSalary = '',
          this.form.quantity = '',
          this.form.gender = '',
          this.form.skill = '',
          this.form.workType = '',
          this.form.position = '',
          this.form.experience = '',
          this.form.date = '',
          this.form.field = '',
          this.form.location = '',
          this.form.description = ''
        this.check = true;
      }

    })
  }

  onUploadAvatar($event: string) {
    this.form.avatarCategory = $event;
  }


}


interface Gender {
  value: string;
  viewValue: string;
}

interface Experience {
  value: string;
  viewValue: string;

}
