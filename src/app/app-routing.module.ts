import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./login/register/register.component";
import {LoginComponent} from "./login/login/login.component";
import {EmploymentDetailComponent} from "./Employment/employment-detail/employment-detail.component";
import {FormDetailComponent} from "./Employment/form-detail/form-detail.component";
import {FormUserProfileComponent} from "./UserProfile/form-user-profile/form-user-profile.component";
import {UserProfileComponent} from "./UserProfile/user-profile/user-profile.component";
import {EditUserProfileComponent} from "./UserProfile/edit-user-profile/edit-user-profile.component";
import {ListEmploymentUnauthenticatedComponent} from "./Admin/list-employment-unauthenticated/list-employment-unauthenticated.component";
import {EditEmploymentComponent} from "./Employment/edit-employment/edit-employment.component";
import {ListEmploymentAuthenticatedComponent} from "./Admin/list-employment-authenticated/list-employment-authenticated.component";
import {CreateRecruitmentPostComponent} from "./RecruitmentPost/create-recruitment-post/create-recruitment-post.component";
import {RecruitmentPostListComponent} from "./RecruitmentPost/recruitment-post-list/recruitment-post-list.component";
import {DetailRecruimentPostComponent} from "./RecruitmentPost/detail-recruiment-post/detail-recruiment-post.component";
import {AllListPostComponent} from "./RecruitmentPost/all-list-post/all-list-post.component";
import {JobApplyComponent} from "./Employment/job-apply/job-apply.component";
import {DetailProfileComponent} from "./Employment/detail-profile/detail-profile.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ListUserComponent} from "./Admin/list-user/list-user.component";
import {HomeComponent} from "./home/home.component";
import {NotifyComponent} from "./UserProfile/notify/notify.component";
import {DetailEmployerComponent} from "./UserProfile/detail-employer/detail-employer.component";
import {ListPostComponent} from "./UserProfile/list-post/list-post.component";
import {SearchResultComponent} from "./RecruitmentPost/search-result/search-result.component";
import {SaveComponent} from "./UserProfile/save/save.component";

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'formEmployment',component: FormDetailComponent},
  {path:'createUserProfile',component: FormUserProfileComponent},
  {path:'UserProfile',component: UserProfileComponent},
  {path: 'UserProfile/Edit/:id',component: EditUserProfileComponent},
  {path: 'Employment/Edit/:id',component: EditEmploymentComponent},
  {path: "listEmploymentUnauthenticated", component :ListEmploymentUnauthenticatedComponent},
  {path: "EmploymentDetail", component : EmploymentDetailComponent},
  {path: "updateEmployment",component: EditEmploymentComponent},
  {path: "EmploymentAuthentication", component : ListEmploymentAuthenticatedComponent},
  {path: "CreatePost",component : CreateRecruitmentPostComponent},
  {path:"PostOfEmployment", component : RecruitmentPostListComponent},
  {path:'detail-recruitmentPost/:id', component: DetailRecruimentPostComponent},
  {path:'AllPost', component: AllListPostComponent},
  {path:'UserProfile/List/:id', component :JobApplyComponent},
  {path:'detail-userProfile/:id',component: DetailProfileComponent},
  {path:'navbar',component :NavbarComponent},
  {path:'allUser',component : ListUserComponent},
  {path:'home', component: HomeComponent},
  {path:'notify',component : NotifyComponent},
  {path:'detail-employment/:id',component: DetailEmployerComponent},
  {path:'listPost/:id',component: ListPostComponent},
  {path:'createRecruitmentPost',component : CreateRecruitmentPostComponent},
  {path:'searchResults',component : SearchResultComponent},
  {path:'save',component : SaveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
