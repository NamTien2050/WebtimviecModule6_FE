import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {Employment} from "../../model/employment";

@Component({
  selector: 'app-detail-employer',
  templateUrl: './detail-employer.component.html',
  styleUrls: ['./detail-employer.component.scss']
})
export class DetailEmployerComponent implements OnInit {
  Employment? : Employment;

  constructor(private authService: AuthService, private tokenService: TokenService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmploymentById();
  }
  getEmploymentById() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.authService.getEmploymentById(paramMap.get('id')).subscribe(data=>{
        this.Employment = data;
        console.log(data)

      })



    })


  }

}
