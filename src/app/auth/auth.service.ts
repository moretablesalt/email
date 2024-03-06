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

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private SERVER_URL = 'https://api.angular-email.com'

  USERNAME_PATH = '/auth/username';
  SIGNUP_PATH = '/auth/signup';

  signedin$ = new BehaviorSubject<boolean | null>(null);
  username = '';

  userNameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(this.SERVER_URL + this.USERNAME_PATH, {username: username});
  }

  signUp(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(this.SERVER_URL + this.SIGNUP_PATH, credentials).pipe(
      // error will skip tap
      tap(({username}) => {
        this.signedin$.next(true);
        this.username = username;
      })
    );
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(this.SERVER_URL + '/auth/signedin').pipe(
      tap(({authenticated, username}) => {
        this.signedin$.next(authenticated);
        this.username = username;
        }
      )
    );
  }

  signout() {
    return this.http.post(this.SERVER_URL + '/auth/signout', {}).pipe(
        tap(() =>
        {
          this.signedin$.next(false)
          this.username = '';
        }

      ));
  }

  signin(credentials: SigninCredentials) {
    return this.http.post<{username: string}>(this.SERVER_URL + '/auth/signin', credentials).pipe(
      tap(({username}) =>
      {
        this.signedin$.next(true)
        this.username = username;
      }
    ));
  }
}
