import {Component, OnInit} from '@angular/core';
import {RecruitmentPost} from "../model/RecruitmentPost";
import {EmployerService} from "../service/employer.service";

@Component({
  selector: 'app-create-recruitment-post',
  templateUrl: './create-recruitment-post.component.html',
  styleUrls: ['./create-recruitment-post.component.scss']
})
export class CreateRecruitmentPostComponent implements OnInit {
  form: any = {};
  recruitmentPost?: RecruitmentPost;

  constructor(private employerService: EmployerService) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.recruitmentPost = new RecruitmentPost(
      this.form.id,
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
      this.form.status = true
    )


    console.log(this.recruitmentPost)
    this.employerService.createRecruitmentPost(this.recruitmentPost).subscribe(data => {
      console.log('data ==> ', data);
    })
  }

  onUploadAvatar($event: string) {
    this.form.avatarCategory = $event;
  }
}

// id: any;
// title: any;
// minSalary: any;
// maxSalary: any;
// quantity: any;
// gender: any;
// skill: any;
// workType: any;
// position: any;
// experience:any;
// date: any;
// field: any;
// location: any;
// status: any;
