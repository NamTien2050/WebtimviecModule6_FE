import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Search} from "../../model/search";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value : Search ={}

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  dulieu(dl1:any,dl2:any,dl3:any){
    this.value.title = dl1;
    this.value.location = dl2;
    this.value.salary = Number(dl3);
    console.log(dl1);console.log(dl2);console.log(dl3)
    console.log(this.value)
    this.authService.test(this.value).subscribe(data => {
      this.authService.search$.next(data);
      this.router.navigate(['searchResults'])
    });

  }
  dulieu1(dl1:any){
    this.authService.test1(dl1).subscribe(data => {
      this.authService.search$.next(data);
      this.router.navigate(['searchResults'])
    })
  }
}
