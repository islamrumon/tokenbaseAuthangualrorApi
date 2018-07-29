import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/user';
import { UserService } from '../../../shared/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
user: User;
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }

  /**onSubmit form */
  OnSubmit(form: NgForm){
    this.userService.registerUser(form.value)
    .subscribe((data: any) =>{
      
      if(data.Succeeded == true){
        this.resetForm(form);
        this.toastr.success('User Regisration Successfull')
      }else{

        this.toastr.error(data.Errors[0]);
      }
    });
  }
 

}
