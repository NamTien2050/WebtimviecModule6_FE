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
    {value: 'Nam', viewValue: 'Nam'},
    {value: 'Nữ', viewValue: 'Nữ'},
    {value: 'Không yêu cầu', viewValue: 'Không phân biệt'},
  ]

  workTypes: WorkType[]= [
    {value:'Toàn thời gian', viewValue: 'Toàn thời gian'},
    {value: 'Bán thời gian', viewValue: 'Bán thời gian'}
  ]

  locations: Location[]=[
    {value:'Hà Nội', viewValue:'Hà Nội'},
    {value:'TP.Hồ Chí Minh', viewValue:'TP.HCM'},
    {value:'Hải Phòng', viewValue:'Hải Phòng'},
    {value:'Đà Nẵng', viewValue:'Đà Nẵng'},
    {value:'Cần Thơ', viewValue:'Cần Thơ'},
  ]
  fields: Field[]=[

    {value:'Kinh doanh', viewValue:'Kinh doanh'},
    {value:'Bất động sản', viewValue:'Bất động sản'},
    {value:'Bưu chính viễn thông', viewValue:'Bưu chính viễn thông'},
    {value:'Công nghệ thông tin', viewValue:'Công nghệ thông tin'},
    {value:'Luật/Pháp lý', viewValue:'Luật/Pháp lý'},
    {value:'Ngân hàng/Chứng khoán/Đầu tư', viewValue:'Ngân hàng/Chứng khoán/Đầu tư'},
    {value:'Ngoại ngữ', viewValue:'Ngoại ngữ'},
    {value:'Nhân sự', viewValue:'Nhân sự'},
    {value:'Quảng cáo/Marketing/PR', viewValue:'Quảng cáo/Marketing/PR'},
    {value:'Tư vấn bảo hiểm', viewValue:'Tư vấn bảo hiểm'},
    {value:'Xây dựng', viewValue:'Xây dựng'},
    {value:'Xuất-Nhập khẩu/Ngoại thương', viewValue:'Xuất-Nhập khẩu/Ngoại thương'},
    {value:'Y tế', viewValue:'Y tế'},
  ]

  user_id: any;

  constructor(private employerService: EmployerService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.user_id = this.tokenService.getId();
    console.log('idddd',this.user_id);
  }

  ngSubmit() {

    this.recruitmentPost = new RecruitmentPost(
      this.form.title,
      this.form.nameEmployer,
      this.form.logo,
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
      this.form.expectation,
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
          this.form.description = '',
          this.form.expectation = ''
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
interface  WorkType {
  value: string;
  viewValue: string
}
interface Location {
  value: string;
  viewValue: string


}
interface Field {
  value:string;
  viewValue:string;
}
