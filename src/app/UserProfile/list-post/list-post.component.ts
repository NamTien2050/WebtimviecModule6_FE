import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'quantity', 'position','experience', 'date'];
  dataSource: any;
  RecruitmentPost : RecruitmentPost[] = []
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(private authService: AuthService, private tokenService: TokenService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmploymentById();
  }
  getEmploymentById() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.authService.getlitsPost(paramMap.get('id')).subscribe(data=>{
        this.RecruitmentPost = data;
        this.dataSource = new MatTableDataSource<RecruitmentPost>(this.RecruitmentPost);
        this.dataSource.paginator = this.paginator;

      })



    })


  }

}
