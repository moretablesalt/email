import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from "rxjs";

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username?: string;
  password?: string;
  passwordConfirmation?: string;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private SERVER_URL = 'https://api.angular-email.com'

  USERNAME_PATH = '/auth/username';
  SIGNUP_PATH = '/auth/signup';

  signedin$ = new BehaviorSubject(false);

  userNameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(this.SERVER_URL + this.USERNAME_PATH, {username: username});
  }

  signUp(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(this.SERVER_URL + this.SIGNUP_PATH, credentials, {withCredentials: true}).pipe(
      // error will skip tap
      tap(() => {this.signedin$.next(true)})
    );
  }

  checkAuth() {
    return this.http.get(this.SERVER_URL + '/auth/signedin', {withCredentials: true}).pipe(
      tap(response => console.log(response))
    )
  }
}
