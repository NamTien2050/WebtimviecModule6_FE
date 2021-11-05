import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../service/token.service";
import {RecruitmentPostService} from "../service/recruitment-post.service";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  checkLogin = false;
  field: any;
  formGroupFind!: FormGroup;

  constructor(private tokenService: TokenService, private router: Router,
              private auth: AuthService,
              private RecruitmentPostService: RecruitmentPostService,
              http: HttpClient) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkLogin = true;
    }
    this.formGroupFind = new FormGroup({
      findField: new FormControl("")
    })
  }

  findField: string = '';

  findAllByFieldContaining() {
    this.RecruitmentPostService.findAllByFieldContaining(this.formGroupFind.get('findField')?.value).subscribe((field) => {
      this.field = field;
      console.log(this.field);
    });
  }
}
