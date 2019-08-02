import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plans } from './plans';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl='http://localhost:8000/';
  httpHeaders=new HttpHeaders({'content-type':'application/json'})

  constructor(private http:HttpClient) { }

  getPlans():Observable<Plans[]>
  {
    return this.http.get<Plans[]>(this.baseUrl+'plans/',{
      headers:this.httpHeaders
    });
  }
}
