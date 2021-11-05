import {Component, OnInit, ViewChild} from '@angular/core';
import {Employment} from "../../model/employment";
import {MatPaginator} from "@angular/material/paginator";
import {AuthService} from "../../service/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list-employment-unauthenticated',
  templateUrl: './list-employment-unauthenticated.component.html',
  styleUrls: ['./list-employment-unauthenticated.component.scss']
})
export class ListEmploymentUnauthenticatedComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nameEmployment', 'Field', 'Accept', 'delete'];
  dataSource: any;
  listEmployments: Employment[] = [];
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private authService: AuthService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.showListEmploymentUnauthenticated();
  }
  deleteEmploymentByid(id: number){
    this.authService.deleteEmploymentByid(id).subscribe(data => {
      this.showListEmploymentUnauthenticated();
    })
  }
  showListEmploymentUnauthenticated(){
    this.authService.getListEmploymenyUnauthenticated().subscribe(data=>{
      this.listEmployments = data;
      this.dataSource = new MatTableDataSource<Employment>(this.listEmployments);
      this.dataSource.paginator = this.paginator;
    })
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.deleteEmploymentByid(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
  Accept(id:number){
    this.authService.acceptEmployment(id).subscribe(result =>{
      this.showListEmploymentUnauthenticated();
      }
    )
  }


}
