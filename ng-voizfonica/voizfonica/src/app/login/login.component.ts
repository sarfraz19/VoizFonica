import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:any=[];
answer:string;
i:number;
  constructor(private configService:CommonServiceService) { }

  ngOnInit() {
  }

  onSubmit(l):void{
    this.configService.getConfig()
    .subscribe((data) =>  {
        console.log(data);
    });
  }
}
