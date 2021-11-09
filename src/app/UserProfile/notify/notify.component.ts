import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {TokenService} from "../../service/token.service";
import {JobApply} from "../../model/job-apply";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {
  notify : JobApply[] = []

  constructor(private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getNotify();
  }
  getNotify(){
    const id = this.tokenService.getId()
    // @ts-ignore
    this.authService.notify(id).subscribe(data=>{
      this.notify = data;

    })

  }

}
