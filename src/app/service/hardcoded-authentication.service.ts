import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HardcodedAuthenticationService {
  
  authenticate(username: any, password: any){
    sessionStorage.setItem('authenticateUser', username)
    if(username==="ADMIN" && password ==="ADMIN"){
    return true;
    }
    return false;
    }
    isUserLoggedIn(){
      let user = sessionStorage.getItem('authenticateUser')
      return !(user === null)
      }
      logout(){
        sessionStorage.removeItem('authenticateUser')
        } 
    
  constructor() { }
  
}
