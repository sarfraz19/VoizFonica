import { DongleComponent } from "./dongle/dongle.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PrepaidComponent } from "./prepaid/prepaid.component";
import { PostpaidComponent } from "./postpaid/postpaid.component";
import { CreateaccountComponent } from "./createaccount/createaccount.component";
import { RechargeComponent } from "./recharge/recharge.component";
import { BillpayComponent } from "./billpay/billpay.component";
import { PlansComponent } from "./plans/plans.component";
import { BillinquiryComponent } from "./billinquiry/billinquiry.component";
import { ReportComponent } from "./report/report.component";
import { FaqComponent } from "./faq/faq.component";
import { NewconComponent } from "./newcon/newcon.component";
import { PayComponent } from "./pay/pay.component";
import { RorbComponent } from "./rorb/rorb.component";
import { from } from "rxjs";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "prepaid", component: PrepaidComponent },
  { path: "postpaid", component: PostpaidComponent },
  { path: "createaccount", component: CreateaccountComponent },
  { path: "recharge", component: RechargeComponent },
  { path: "billpay", component: BillpayComponent },
  { path: "plans", component: PlansComponent },
  { path: "recharge", component: RechargeComponent },
  { path: "billinquiry", component: BillinquiryComponent },
  { path: "report", component: ReportComponent },
  { path: "faq", component: FaqComponent },
  { path: "newcon", component: NewconComponent },
  { path: "pay", component: PayComponent },
  { path: "rorb", component: RorbComponent },
  { path: "dongle", component: DongleComponent },
  { path: "test", component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
