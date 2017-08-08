import { Injectable } from '@angular/core';
import {User} from './dump/user';
import {Users} from './dump/dummyData';

@Injectable()
export class LoginService {
 
  constructor() { }
  getUsers() : Promise<User[]> {
    return Promise.resolve(Users);
  }

  authenticate(username, password) : Promise<boolean> {
    let isAuthentic = false;
    for(let user of Users){
      if(user.name === username && user.password === password){
          isAuthentic = true;
          break;
      } 
    }
    
    return Promise.resolve(isAuthentic);
  }

  register(username,password,email) : Promise<boolean> {
    let isFound = false;
    for(let user of Users){
       if(user.name == username && user.email == email){
         isFound = true;
         break;
       }
    }
    
    return Promise.resolve(isFound);
  }

}
