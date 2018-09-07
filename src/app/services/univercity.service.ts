import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { Univercity } from "../models/Univercity";
import { HttpClient } from "@angular/common/http";
import {User} from "../../../../routing/src/app/models/User";

@Injectable({
  providedIn: 'root'
})
export class UnivercityService {
  private apiURL:string = environment.api_url;
  constructor(
    private http: HttpClient
  ) { }

  getUnivercity(name: string): Observable<Univercity[]> {
    return this.http.get<Univercity[]>(`https://cors.io/?${this.apiURL}/search?country=${name}`);
  }

}
