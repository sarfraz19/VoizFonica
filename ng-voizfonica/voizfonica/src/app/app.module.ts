import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { RechargeComponent } from './recharge/recharge.component';
import { BillpayComponent } from './billpay/billpay.component';
import { PayComponent } from './pay/pay.component';
import { NewconComponent } from './newcon/newcon.component';
import { BillinquiryComponent } from './billinquiry/billinquiry.component';
import { ReportComponent } from './report/report.component';
import { FaqComponent } from './faq/faq.component';
import { RorbComponent } from './rorb/rorb.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PlansComponent,
    PrepaidComponent,
    PostpaidComponent,
    CreateaccountComponent,
    RechargeComponent,
    BillpayComponent,
    PayComponent,
    NewconComponent,
    BillinquiryComponent,
    ReportComponent,
    FaqComponent,
    RorbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
