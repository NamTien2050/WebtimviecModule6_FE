import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FieldList} from "../model/FieldList";
import {EmployerService} from "../service/employer.service";
import {Router} from "@angular/router";
import {LocationList} from "../model/LocationList";

@Component({
  selector: 'app-search-side-bar',
  templateUrl: './search-side-bar.component.html',
  styleUrls: ['./search-side-bar.component.scss']
})
export class SearchSideBarComponent implements OnInit {
  fieldList: FieldList[] = [];
  locationList: LocationList[] = [];
  @Output()
  eventEmiter = new EventEmitter();

  constructor(private employerService: EmployerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getFieldList()
  }

  getFieldList() {
    this.employerService.getFieldList().subscribe(fieldList => {
      this.fieldList = fieldList;
      console.log("fieldList=====>", this.fieldList)
    })
  }

  getLocationList() {
    this.employerService.getLocationList().subscribe(locationList => {
      this.locationList = locationList;
      console.log("Location list ===>", this.locationList)
    })
  }

  findByField(index: number) {
    let field: any
    for (let i = 0; i < this.fieldList.length; i++) {
      field = this.fieldList[index]
    }
    this.eventEmiter.emit(field)
    console.log('kiem tra b====', field)
  }

  // findByLocation(index: number) {
  //   let location: any
  //   for (let i = 0; i < this.locationList.length; i++) {
  //     location = this.locationList[index]
  //   }
  //   this.eventEmiter.emit(location)
  //   window.sessionStorage.removeItem("location")
  //   window.sessionStorage.setItem("field", location)
  //   console.log('kiem tra c====', location)
  // }
}
