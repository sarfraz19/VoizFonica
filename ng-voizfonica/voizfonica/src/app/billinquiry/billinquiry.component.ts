import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-billinquiry',
  templateUrl: './billinquiry.component.html',
  styleUrls: ['./billinquiry.component.css']
})
export class BillinquiryComponent implements OnInit {
bill_details:any[];

num='0';
constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); }

  ngOnInit() {
    /*comment1*/
  }

  fn(){
    this.bill_details=[
      {
        left:'VoizFonica Number',
        right:'9873547692'
      },
      {
         left:'Bill Number',
        right:'74968736'
      },
      {
        left:'Bill Date',
        right:'23-07-2019'
      },
      {
        left:'Bill period',
        right:'15-07-2019 to 20-07-2019'
      },
      {
        left:'Pay by Date',
        right:'30-07-2019'
      },
      {
        left:'Bill Amount',
        right:'Rs.200'
      }
    ];
  }

}
