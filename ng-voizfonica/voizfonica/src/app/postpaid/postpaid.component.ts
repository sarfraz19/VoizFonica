import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {

  constructor(private apiService:ApiService) {
    console.log(this.apiService.getNum());
  }

  ngOnInit() {
  }

}
