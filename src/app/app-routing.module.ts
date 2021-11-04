import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./login/register/register.component";
import {LoginComponent} from "./login/login/login.component";
import {RecruitmentPostListComponent} from "./recruitment-post-list/recruitment-post-list.component";
import {CreateRecruitmentPostComponent} from "./create-recruitment-post/create-recruitment-post.component";
import {DetailRecruitmentPostComponent} from "./detail-recruitment-post/detail-recruitment-post.component";

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'recruitmentPostList', component: RecruitmentPostListComponent},
  {path:'createRecruitmentPost', component: CreateRecruitmentPostComponent},
  {path:'detail-recruitmentPost', component: DetailRecruitmentPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
