import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http: HttpClient) { }

  createNewUser(n, pn, pw): Observable<any> {
    const details = { username: pn, password: pw, first_name: n };
    return this.http.post<any>(this.baseUrl + 'users/', details,
      { headers: this.httpHeaders }
    );
  }

  checkIsCustomer(pn): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'customersbynum/' + pn + '/',
      { headers: this.httpHeaders }
    );
  }

  checkUserPresent(pn): Observable<any> {
    //   const details={username:pn,password:pw,first_name:n};
    return this.http.get<any>(this.baseUrl + 'usersbyname/' + pn + '/',
      { headers: this.httpHeaders }
    );
  }

  addToCustomers(n, a, pin, e, num, ppd, plan, d): Observable<any> {
    const details = {
      name: n,
      address: a,
      pincode: pin,
      email: e,
      select_num: num,
      prepostdon: ppd,
      plan: plan,
      kyc_date:d
    };
    return this.http.post<any>(this.baseUrl + 'customersbynum/', details,
      { headers: this.httpHeaders });
  }

  loginUser(authData) {
    const body = JSON.stringify(authData);
    return this.http.post(this.baseUrl + 'auth/', body, { headers: this.httpHeaders });
  }

  getPlans(): Observable<any> {
    return this.http.get(this.baseUrl + "plan/", {
      headers: this.httpHeaders
    });
  }
  // getOnlineUsers():Observable<any>
  // {
  //   return this.http.get<any>(this.baseUrl+'onlineusers/',
  //   {headers:this.httpHeaders}
  //   );
  // }

  // getOnlineUserDetails(id):Observable<any>
  // {
  //   return this.http.get<any>(this.baseUrl+'onlineusers/'+id+'/',
  //   {headers:this.httpHeaders}
  //   );
  // }

  // createOnlineUser(ou):Observable<any>
  // {
  //   const details={name:ou.name,phone_num:ou.phone_num,pw:ou.pw,retype_pw:ou.retype_pw};
  //   return this.http.post<any>(this.baseUrl+'onlineusers/',details,
  //   {headers:this.httpHeaders}
  //   );
  // }

  // updateOnlineUser(ou):Observable<any>
  // {
  //   const details={name:ou.name,phone_num:ou.phone_num,pw:ou.pw,retype_pw:ou.retype_pw};
  //   return this.http.put<any>(this.baseUrl+'onlineusers/'+ou.id+'/',details,
  //   {headers:this.httpHeaders}
  //   );
  // }

  // deleteOnlineUser(id):Observable<any>
  // {
  //   return this.http.delete<any>(this.baseUrl+'onlineusers/'+id+'/',
  //   {headers:this.httpHeaders}
  //   );
  // }
}
