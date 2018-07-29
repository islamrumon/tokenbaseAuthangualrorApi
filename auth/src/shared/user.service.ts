import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Response } from "@angular/http";

@Injectable()
export class UserService {

  /**THis is rootUrl */
  readonly rootUrl ='http://localhost:11890/';
  constructor(private http: HttpClient) { }

  /**this founction for sending dta in server */
 registerUser(user: User){
  const body: User = {
    UserName: user.UserName,
    Password: user.Password,
    Email: user.Email,
    FirstName: user.FirstName,
    LastName: user.LastName
  }
  
  var reqHeader = new HttpHeaders({'No-Auth':'True'});
  return this.http.post(this.rootUrl + 'api/User/Register', body,{headers : reqHeader});
 
 }
 /**End the registration with server */


 /**User Login */
 userAuthentication(userName, password) {
  var data = "username=" + userName + "&password=" + password + "&grant_type=password";
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
}


/**Get all data */
getUserClaims(){
  return  this.http.get(this.rootUrl+'api/User/GetUserClaims');
 }
}
