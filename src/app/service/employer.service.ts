import { Injectable } from '@angular/core';
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
  constructor(private http: HttpClient) {
  }

  getRecruitmentPostList():Observable<RecruitmentPost[]>{
    return this.http.get<RecruitmentPost[]>(this.RECRUITMENT_API)
  }

  createRecruitmentPost(recruitmentPost: RecruitmentPost): Observable<RecruitmentPost>{
    return this.http.post<RecruitmentPost>(this.RECRUITMENT_API, recruitmentPost);
  }

  deleteRecruitmentPost(id: number): Observable<RecruitmentPost>{
    return this.http.delete<RecruitmentPost>(this.RECRUITMENT_API+'/'+id);
  }
  //
  // updateStudent(id: number, student: Students) : Observable<Students>{
  //   return this.http.put<Students>(this.STUDENT_API+'/'+id, student)
  // }
  //
  // detailStudent(id: number): Observable<Students>{
  //   return this.http.get<Students>(this.STUDENT_API+'/'+id);
  //   // return this.http.get<Category>(`${this.API_CATEGORY}/${id}`)
  // }
}
