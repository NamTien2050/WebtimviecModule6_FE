import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UploadAvatarComponent} from "./upload/upload-file/upload-avatar.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment.prod";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {httpInterceptorProviders} from "./security/security.interceptor";
import {NavbarComponent} from './navbar/navbar.component';
import {RegisterComponent} from './login/register/register.component';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import { DetailRecruitmentPostComponent } from './detail-recruitment-post/detail-recruitment-post.component';
import { LoginComponent } from './login/login/login.component';
import { EmploymentDetailComponent } from './Employment/employment-detail/employment-detail.component';
import { FormDetailComponent } from './Employment/form-detail/form-detail.component';
import { FormUserProfileComponent } from './UserProfile/form-user-profile/form-user-profile.component';
import { UserProfileComponent } from './UserProfile/user-profile/user-profile.component';
import { EditUserProfileComponent } from './UserProfile/edit-user-profile/edit-user-profile.component';
import { ListEmploymentUnauthenticatedComponent } from './Admin/list-employment-unauthenticated/list-employment-unauthenticated.component';
import {DialogComponent} from "./Admin/dialog/dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import { EditEmploymentComponent } from './Employment/edit-employment/edit-employment.component';
import { ListEmploymentAuthenticatedComponent } from './Admin/list-employment-authenticated/list-employment-authenticated.component';
import { CreateRecruitmentPostComponent } from './RecruitmentPost/create-recruitment-post/create-recruitment-post.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { RecruitmentPostListComponent } from './RecruitmentPost/recruitment-post-list/recruitment-post-list.component';
import { DetailRecruimentPostComponent } from './RecruitmentPost/detail-recruiment-post/detail-recruiment-post.component';
import { AllListPostComponent } from './RecruitmentPost/all-list-post/all-list-post.component';
import { JobApplyComponent } from './Employment/job-apply/job-apply.component';
import { DetailProfileComponent } from './Employment/detail-profile/detail-profile.component';
import { ListUserComponent } from './Admin/list-user/list-user.component';
import { HomeComponent } from './home/home.component';
import { JobBoardComponent } from './RecruitmentPost/job-board/job-board.component';
import { SearchResultComponent } from './Search/search-result/search-result.component';
import { SearchSideBarComponent } from './search-side-bar/search-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadAvatarComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    CreateRecruitmentPostComponent,
    RecruitmentPostListComponent,
    DetailRecruitmentPostComponent,
    EmploymentDetailComponent,
    FormDetailComponent,
    FormUserProfileComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    ListEmploymentUnauthenticatedComponent,
    EditEmploymentComponent,
    ListEmploymentAuthenticatedComponent,
    CreateRecruitmentPostComponent,
    RecruitmentPostListComponent,
    DetailRecruimentPostComponent,
    AllListPostComponent,
    JobApplyComponent,
    DetailProfileComponent,
    RecruitmentPostListComponent,
    ListUserComponent,
    HomeComponent,
    DialogComponent,
    JobBoardComponent,
    SearchResultComponent,
    SearchSideBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MDBBootstrapModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
