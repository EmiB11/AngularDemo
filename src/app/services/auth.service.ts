import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //Login del usuario en ReqRes

  login(email: string , password: string){
    let body ={
      email,
      password
    }
    return this.http.post("https://reqres.in/api/login" , body)
  }


}
