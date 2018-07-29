import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/user';
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userServices: UserService, private route: Router) { }

  ngOnInit() {
  }

  OnSubmit(userName,passeord){
   this.userServices.userAuthentication(userName, passeord)
   .subscribe((data: any)=>{
    localStorage.setItem('userToken',data.access_token);
    this.route.navigate(['/home']);
   },
   (err: HttpErrorResponse)=>{
     this.isLoginError =true;
   });
  }

}
