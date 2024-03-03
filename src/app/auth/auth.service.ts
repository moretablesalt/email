import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface UsernameAvailableResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private SERVER = 'https://api.angular-email.com/auth/username'

  userNameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(this.SERVER, {username: username});
  }
}
