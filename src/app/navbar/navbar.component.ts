import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../service/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  checkLogin = false;

  constructor(private tokenService : TokenService, private router: Router,
              private auth : AuthService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkLogin = true;
    }
  }



}
