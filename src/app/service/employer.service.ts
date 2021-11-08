import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RecruitmentPost} from "../model/RecruitmentPost";

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  // LOCAL API :
  private RECRUITMENT_API = environment.LOCAL_API + 'employers/recruitmentPosts';
  private GENERAL_API = environment.LOCAL_API + 'rest';

  constructor(private http: HttpClient) {
  }

  getRecruitmentPostList(id: number): Observable<RecruitmentPost[]> {
    return this.http.get<RecruitmentPost[]>(this.RECRUITMENT_API + '/list/' + id)
  }

  createRecruitmentPost(recruitmentPost: RecruitmentPost): Observable<RecruitmentPost> {
    return this.http.post<RecruitmentPost>(this.RECRUITMENT_API, recruitmentPost);
  }


  deleteRecruitmentPost(id: number): Observable<RecruitmentPost> {
    return this.http.delete<RecruitmentPost>(this.RECRUITMENT_API + '/' + id);
  }

  // updateStudent(id: number, student: Students) : Observable<Students>{
  //   return this.http.put<Students>(this.STUDENT_API+'/'+id, student)
  // }

  // detailRecruitmentPost(id: number): Observable<RecruitmentPost> {
  //   return this.http.get<RecruitmentPost>(this.RECRUITMENT_API + '/' + id);
  // }
  detailRecruitmentPost(id: number): Observable<RecruitmentPost>{
    return this.http.get<RecruitmentPost>(this.RECRUITMENT_API+'/list/'+id);
    // return this.http.get<Category>(`${this.API_CATEGORY}/${id}`)
  }

  checkLockPost(id: number, status: any): Observable<RecruitmentPost> {

    return this.http.put<RecruitmentPost>(this.RECRUITMENT_API + '/updateStatus/' + id, status)
  }

  getUserProfileOfEmployment(id: number): Observable<any> {
    return this.http.get<any>(this.RECRUITMENT_API + "/UserProfileofEmployment/" + id)
  }

  getEmployerDetailByAppUser_Id(id: number): Observable<any> {
    return this.http.get<any>(this.GENERAL_API + "/EmploymentByUser/" + id)
  }

  pageRecruitmentPost(nextPage: any){
    const params = nextPage;
    return this.http.get(this.GENERAL_API+"/recruitmentPostPage", {params}) // {params} thuoc ve ham get cua angular
  }
}


