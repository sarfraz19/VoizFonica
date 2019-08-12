import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  val=0;
  changeVal(v)
  {
    this.val=v;  
  }
  getVal()
  {
    return this.val;
  }

  private num='0';
  getNum()
  {
    console.log(localStorage.getItem("num"));
    return localStorage.getItem("num");
  }
  changeNum(n)
  {
    this.num=n;
    localStorage.setItem("num",this.num);
    console.log(localStorage.getItem("num"));
  }
  logout()
  {
    this.num='0';
    localStorage.setItem("num",this.num);
    console.log(localStorage.getItem("num"));
  }


  private typeOfCustomer='';
  getType()
  {
    console.log(localStorage.getItem("typeOfCustomer"));
    return localStorage.getItem("typeOfCustomer");
  }
  changeType(t)
  {
    this.typeOfCustomer=t;
    localStorage.setItem("typeOfCustomer",this.typeOfCustomer);
    console.log(localStorage.getItem("typeOfCustomer"));
  }


  private baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http: HttpClient) { 
    
}

  createNewUser(n, un, pn, pw): Observable<any> {
    const details = { username: pn, password: pw, first_name: n, last_name: un, email:pw+'@kk.in'};
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
    return this.http.get<any>(this.baseUrl + 'usersbynum/' + pn + '/',
      { headers: this.httpHeaders }
    );
  }

  checkUserNamePresent(un): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'usersbyusername/' + un + '/',
      { headers: this.httpHeaders }
    );
  }

  addToCustomers(n, a, pin, e, aa, ppd, plan, d): Observable<any> {
    const details = {
      name: n,
      address: a,
      pincode: pin,
      aadhar: aa,
      aadhar_verified:false,
      email: e,
      phone_num:"0",
      type1: ppd,
      plan: plan,
      kyc_date:d
    };
    return this.http.post<any>(this.baseUrl + 'customersbynum/', details,
      { headers: this.httpHeaders });
  }

  login(un,pw) {
    const details = {username:un,password:pw};
    return this.http.post(this.baseUrl + 'auth/', details,
    {headers: this.httpHeaders}
    );
  }

  getPlans(): Observable<any> {
    return this.http.get(this.baseUrl + "plan/", 
    {headers: this.httpHeaders}
    );
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
