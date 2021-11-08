import {Component, OnInit} from '@angular/core';
import {Employment} from "../model/employment";
import {RecruitmentPost} from "../model/RecruitmentPost";
import {EmployerService} from "../service/employer.service";
import {PageEvent} from "@angular/material/paginator";
import {TokenService} from "../service/token.service";

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employer?: Employment;
  totalElements: number = 0;
  recruitmentPosts: RecruitmentPost[] = [];
  // employers?: Employment[] = [];
  // arrEmployers: Array<Employment> = [];
  // recruitmentPost?: RecruitmentPost;
  checkLogin: any;
  constructor(private employerService: EmployerService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    const role= this.tokenService.getRole();
    console.log("kiểm tra role=======", role)
    if (role == "ROLE_USER") {
      this.checkLogin = 1;
    } else if (role == "ROLE_EMPLOYMENT" || role == "ROLE_ADMIN") {
      this.checkLogin = 2;
    } else {
      this.checkLogin = 3
    }
    this.pageRecruitmentPost({page: 0, size: 3})
    $(document).ready(function () {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 2,
            nav: true,
            slideBy: 2,
            dots: false
          },
          600: {
            items: 4,
            nav: false,
            slideBy: 2,
            dots: false
          },
          1000: {
            items: 6,
            nav: true,
            loop: false,
            slideBy: 2
          }
        }
      });
    })
    $('.catelog-list').readmore({
      speed: 75,
      maxHeight: 150,
      moreLink: '<a href="#">Xem thêm<i class="fa fa-angle-down pl-2"></i></a>',
      lessLink: '<a href="#">Rút gọn<i class="fa fa-angle-up pl-2"></i></a>'
    });
  }

  pageRecruitmentPost(nextPage: { page?: number; size?: number; }) {
    console.log('goi ham page')
    this.employerService.pageRecruitmentPost(nextPage).subscribe(data => {
      console.log('data --> ', data);
      // @ts-ignore
      this.recruitmentPosts = data['content']
      // for (let i = 0; i < this.recruitmentPosts.length; i++) {
      //  // @ts-ignore
      // this.employerService.getEmployerDetailByAppUser_Id(this.recruitmentPosts[i].appUser.id).subscribe(result=>{
      //   this.employer =result;
      //
      //   // @ts-ignore
      //   this.arrEmployers.push(this.employer[i])
      //   console.log('mang employers --> ', this.arrEmployers)
      //   console.log("test lay du lieu",this.employer)
      // })
      // }
      // @ts-ignore
      this.totalElements = data['totalElements']
    })
  }

  nextPage(event: PageEvent) {
    console.log('event -->', event);
    const nextPage = {};
    // @ts-ignore
    nextPage['page'] = event.pageIndex.toString();
    // @ts-ignore
    nextPage['size'] = event.pageSize.toString();
    // @ts-ignore
    console.log('request[size]', nextPage['size']);
    this.pageRecruitmentPost(nextPage);
  }
}
