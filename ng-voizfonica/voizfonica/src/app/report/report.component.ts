import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  onlineusers =[];

  constructor(private apiservices:ApiService) { }

  ngOnInit() {
    this.apiservices.getOnlineUsers().subscribe(data=>(this.onlineusers=data));
  }

}
