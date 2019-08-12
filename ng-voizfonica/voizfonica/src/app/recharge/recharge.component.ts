import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  num='0';
  constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); }

  ngOnInit() {
  }

}
