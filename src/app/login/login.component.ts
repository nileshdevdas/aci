import { Component, OnInit , ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, FormBuilder, Validators} from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , AfterViewInit{
ngAfterViewInit(){
    console.log(this.uname.nativeElement);
    console.log($(this.uname.nativeElement).show());
}
@ViewChild("uname")
uname:ElementRef

  loginForm:FormGroup;
  constructor() {
      let usernameFormControl = new FormControl('',[Validators.required, Validators.minLength(3)]);
      this.loginForm = new FormGroup({
        username : usernameFormControl
      });
  }


  onSubmit(){
    console.log(this.loginForm.valid)
    if(this.loginForm.valid){
      console.log("then submit.......");
    }else{
      if(this.loginForm.pristine){
        alert("please provide valid values")
      }else{
        alert("Errors Exist in form please check ")
      }
    }

  }
  changeName(){
    console.log('xxxx');
  }
  ngOnInit() {

  }

}
