import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  val = 0;
  changeVal(v) {
    this.val = v;
  }
  getVal() {
    return this.val;
  }

  private num = "9092873062";
  getNum() {
    return this.num;
  }

  private typeOfCustomer = "Prepaid";
  getType() {
    return this.typeOfCustomer;
  }

  private amt = "0";
  getAmt() {
    return localStorage.getItem("amt");
  }
  changeAmt(val) {
    this.amt = val;
    localStorage.setItem("amt", this.amt);
  }

  private prevpage = "";
  getPage() {
    return localStorage.getItem("prevpage");
  }
  changePage(val) {
    this.prevpage = val;
    localStorage.setItem("prevpage", this.prevpage);
  }

  private baseUrl = "http://localhost:8000/";
  httpHeaders = new HttpHeaders({ "content-type": "application/json" });

  constructor(private http: HttpClient) {}

  createNewUser(n, un, pn, pw): Observable<any> {
    const details = {
      username: pn,
      password: pw,
      first_name: n,
      last_name: un
    };
    return this.http.post<any>(this.baseUrl + "users/", details, {
      headers: this.httpHeaders
    });
  }

  checkIsCustomer(pn): Observable<any> {
    return this.http.get<any>(this.baseUrl + "customersbynum/" + pn + "/", {
      headers: this.httpHeaders
    });
  }

  checkUserPresent(pn): Observable<any> {
    //   const details={username:pn,password:pw,first_name:n};
    return this.http.get<any>(this.baseUrl + "usersbynum/" + pn + "/", {
      headers: this.httpHeaders
    });
  }

  checkUserNamePresent(un): Observable<any> {
    return this.http.get<any>(this.baseUrl + "usersbyusername/" + un + "/", {
      headers: this.httpHeaders
    });
  }

  addToCustomers(n, a, pin, e, aa, ppd, plan, d): Observable<any> {
    const details = {
      name: n,
      address: a,
      pincode: pin,
      aadhar: aa,
      aadhar_verified: false,
      email: e,
      phone_num: "0",
      type1: ppd,
      plan: plan,
      kyc_date: d,
      balance: "Rs.0",
      expiriesIn: "0",
      callUsage: "0",
      dataUsage: "0",
      smsUsage: "0",
      bill: "0"
    };
    return this.http.post<any>(this.baseUrl + "customersbynum/", details, {
      headers: this.httpHeaders
    });
  }

  updateCustomersBill(det, bill): Observable<any> {
    const details = {
      name: det.name,
      address: det.address,
      pincode: det.pincode,
      aadhar: det.aadhar,
      aadhar_verified: det.aadhar_verified,
      email: det.email,
      phone_num: det.phone_num,
      type1: det.type1,
      plan: det.plan,
      kyc_date: det.kyc_date,
      balance: det.balance,
      expiriesIn: det.expiriesIn,
      callUsage: det.callUsage,
      dataUsage: det.dataUsage,
      smsUsage: det.smsUsage,
      bill: bill
    };
    return this.http.put<any>(
      this.baseUrl + "customersbynum/" + det.phone_num + "/",
      details,
      {
        headers: this.httpHeaders
      }
    );
  }

  // updateBill(det,str):Observable<any>{
  //   const dettails={
  //     name:det.name,
  //     address:det.address,
  // }
  // }

  loginUser(authData) {
    const body = JSON.stringify(authData);
    return this.http.post(this.baseUrl + "auth/", body, {
      headers: this.httpHeaders
    });
  }

  getPlans(): Observable<any> {
    return this.http.get(this.baseUrl + "plan/", {
      headers: this.httpHeaders
    });
  }

  getDetails(): Observable<any> {
    return this.http.get(this.baseUrl + "array/", {
      headers: this.httpHeaders
    });
  }

  getPrepaid(): Observable<any> {
    return this.http.get(this.baseUrl + "prepaid/", {
      headers: this.httpHeaders
    });
  }

  getPostpaid(): Observable<any> {
    return this.http.get(this.baseUrl + "postpaid/", {
      headers: this.httpHeaders
    });
  }

  getDongle(): Observable<any> {
    return this.http.get(this.baseUrl + "dongle/", {
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
