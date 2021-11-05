import { Component, OnInit } from '@angular/core';
import {RecruitmentPost} from "../model/RecruitmentPost";
import {ActivatedRoute} from "@angular/router";
import {EmployerService} from "../service/employer.service";

declare var $:any;
@Component({
  selector: 'app-detail-recruitment-post',
  templateUrl: './detail-recruitment-post.component.html',
  styleUrls: ['./detail-recruitment-post.component.scss']

})
export class DetailRecruitmentPostComponent implements OnInit {

  form: any = {};
  recruitmentPost?: RecruitmentPost;

  constructor(private atRouter: ActivatedRoute,
              private employerService: EmployerService,
  ) {
  }

  ngOnInit(): void {
    $(document).ready(function (){
      $('.catelog-list').readmore({
        speed: 75,
        maxHeight: 150,
        moreLink: '<a href="#">Xem thêm<i class="fa fa-angle-down pl-2"></i></a>',
        lessLink: '<a href="#">Rút gọn<i class="fa fa-angle-up pl-2"></i></a>'
      });
    });
    this.atRouter.paramMap.subscribe(ctgId => {
      const id = Number(ctgId.get('id'));
      console.log(id)
      this.employerService.detailRecruitmentPost(id).subscribe(res => {
        this.recruitmentPost = res;
        console.log(this.recruitmentPost)

      });
    });
  }

}
