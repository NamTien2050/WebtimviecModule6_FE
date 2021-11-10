import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployerService} from "../../service/employer.service";
import {TokenService} from "../../service/token.service";
import {UserProfile} from "../../model/user-profile";
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {RecruitmentPost} from "../../model/RecruitmentPost";

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'level', 'field', 'pick'];
  dataSource: any;
  UserProfile?: UserProfile[] = [];
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private employerService: EmployerService, private tokenService: TokenService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUserProfile()
  }

  getUserProfile() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.employerService.getUserProfileOfEmployment(paramMap.get('id')).subscribe(data=>{
        this.UserProfile = data;
        console.log("id",data)
        // @ts-ignore
        this.dataSource = new MatTableDataSource<RecruitmentPost>(this.UserProfile);
        this.dataSource.paginator = this.paginator;
      })



    })
  }
  pick(id : any){
    console.log(id);
    const id1 = window.sessionStorage.getItem("id_post");
    // @ts-ignore
    this.employerService.pickUserProfile(id,id1).subscribe(data => {
      this.getUserProfile()
      console.log(data)
    },error => {
      window.confirm("Ứng viên này đã được bạn chọn")

    })

  }
}
