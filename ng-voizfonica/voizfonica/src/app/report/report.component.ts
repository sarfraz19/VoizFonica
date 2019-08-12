import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  num='0';
  constructor(private apiService:ApiService) {this.num=this.apiService.getNum(); }

  ngOnInit() {
    
  }

}
