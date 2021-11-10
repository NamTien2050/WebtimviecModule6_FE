import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {RecruitmentPost} from "../model/RecruitmentPost";


@Injectable({
  providedIn: 'root'
})
export class RecruitmentPostService {
  RecruitmentPost: RecruitmentPost[] = [];

  constructor(private http: HttpClient) {
  }

  findAllByFieldContaining(field: string) {
    return this.http.get(`${environment.apiUrl}/post/fields/` + field)
  }

  findAllByFieldContaining2(search: string) {
    return this.http.get(`${environment.apiUrl}/post/searchAdvanced?search=` + search)
  }

}
