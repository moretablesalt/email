import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatchPassword} from "../validators/match-password";
import {UniqueUsername} from "../validators/unique-username";
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [this.userNameValidator.validate.bind(this.userNameValidator)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ])
  }, {validators: [this.matchPassword.validate]})
  constructor(private matchPassword: MatchPassword,
              private userNameValidator: UniqueUsername,
              private authService: AuthService) {
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.authForm.invalid) return;

    const {username, password, passwordConfirmation} = this.authForm.value;

    if (typeof username === 'string' && typeof password === 'string' && typeof passwordConfirmation === 'string') {
      this.authService.signUp({username, password, passwordConfirmation}).subscribe({
        next: value => {
          // navigate to some route
        },
        error: err => {
          if (!err.status) {
            this.authForm.setErrors({noConnection: true});
          }
        }
      })

    }


  }

}
