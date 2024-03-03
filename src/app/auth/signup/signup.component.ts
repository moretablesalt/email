import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  authForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    passwordConfirmation: new FormControl()
  })
  constructor() {
  }
  ngOnInit(): void {
    console.log(this.authForm);
  }

}
