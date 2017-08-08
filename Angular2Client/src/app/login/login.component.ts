import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
  username : string;
  passkey : string;
  constructor(private loginService : LoginService) { }

  ngOnInit() {
    
  }
  
  onSubmit() : void{
    alert('User Name : ' + this.username);
    alert('Password : ' + this.passkey);
    if(this.username =='' && this.passkey == '' ){
       alert('User name and password is mandatory');
    }else{
       this.loginService.authenticate(this.username, this.passkey).then( isAuthentic => {
           alert('Successfull log in');
       })
    }
      
    
  }
}
