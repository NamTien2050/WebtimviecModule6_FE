import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TokenService} from "../service/token.service";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {HttpClient} from "@angular/common/http";
import {RecruitmentPostService} from "../service/recruitment-post.service";

@Component({
  selector: 'app-findby-post',
  templateUrl: './findby-post.component.html',
  styleUrls: ['./findby-post.component.scss']
})
export class FindByPostComponent implements OnInit {
  checkLogin = false;
  field: any;
  formGroupFind!: FormGroup;
  findField: string = '';
  constructor(private RecruitmentPostService: RecruitmentPostService) {
  }

  ngOnInit(): void {
    this.formGroupFind = new FormGroup({
      findField: new FormControl("")
    })
  }
  findAllByFieldContaining() {
    this.RecruitmentPostService.findAllByFieldContaining(this.formGroupFind.get('findField')?.value).subscribe((field) => {
      this.field = field;
      console.log(this.field);
    });
  }
}
