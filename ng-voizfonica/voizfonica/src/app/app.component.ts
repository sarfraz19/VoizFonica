import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voizfonica';
  vertical=['My Account','Plans Available','Recharge/Bill Payment','Get a new Connection','Help & Support'];
  horizontal=['Home','About Us','Contact Us'];

  constructor(private router:Router){

  }

  fn(){
    var s=this.router.url.toString().split("/");
    if(s[1]=="")
    return true;
    else
    return false;
  }
}
