import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {RecruitmentPostService} from "../service/recruitment-post.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit{
  field: any;
  findField: string = '';
  formGroupFind!: FormGroup;
  @Output() autoSearch: EventEmitter<string>= new EventEmitter<string>();
  @Output() groupFilters: EventEmitter<any>= new EventEmitter<any>();

  constructor(private RecruitmentPostService: RecruitmentPostService,
              private formBuilder: FormBuilder) {
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
