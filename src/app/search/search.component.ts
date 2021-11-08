import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RecruitmentPostService} from "../service/recruitment-post.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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
