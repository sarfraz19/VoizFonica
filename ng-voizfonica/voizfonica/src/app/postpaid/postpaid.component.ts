import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {

  num='0';
  constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); }

  ngOnInit() {
  }

}
