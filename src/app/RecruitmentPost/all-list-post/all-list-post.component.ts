import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {RecruitmentPost} from "../../model/RecruitmentPost";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-all-list-post',
  templateUrl: './all-list-post.component.html',
  styleUrls: ['./all-list-post.component.scss']
})
export class AllListPostComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'quantity', 'position','experience'];
  dataSource: any;
  recruitmentPost: RecruitmentPost[]=[];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  constructor(private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.showAllListPost();
  }
  showAllListPost(){
    this.authService.getAllListPost().subscribe(data => {
      this.recruitmentPost = data;
      this.dataSource = new MatTableDataSource<RecruitmentPost>(this.recruitmentPost);
      this.dataSource.paginator = this.paginator;

    })
  }

}
