import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers : [LoginService]
})
export class RegistrationComponent implements OnInit {
  username : string;
  password : string;
  email : string;
  constructor(private loginService : LoginService) {
      
  }

  ngOnInit() {
  }

  onRegister() {
    if(this.username != '' && this.password != '' && this.email != ''){
       this.loginService.register(this.username, this.password, this.email).then( result => {
         let message = result ? 'Success' : 'Failure';
         alert(message);
       });
    }
  }


}
