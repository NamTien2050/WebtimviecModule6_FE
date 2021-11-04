import {Component, OnInit, ViewChild} from '@angular/core';
import {Employment} from "../../model/employment";
import {MatPaginator} from "@angular/material/paginator";
import {AuthService} from "../../service/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list-employment-authenticated',
  templateUrl: './list-employment-authenticated.component.html',
  styleUrls: ['./list-employment-authenticated.component.scss']
})
export class ListEmploymentAuthenticatedComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nameEmployment', 'Field', 'Edit', 'Lock'];
  dataSource: any;
  listEmployments: Employment[] = [];
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.showListEmploymentAuthenticated()
  }
  showListEmploymentAuthenticated(){
    this.authService.getListEmploymentAuthenticated().subscribe(data=>{
      this.listEmployments = data;
      this.dataSource = new MatTableDataSource<Employment>(this.listEmployments);
      this.dataSource.paginator = this.paginator;
    })
  }

  Lock(id:number){
    this.authService.lockEmployment(id).subscribe(data=>{
      this.showListEmploymentAuthenticated()
    })
  }

}
