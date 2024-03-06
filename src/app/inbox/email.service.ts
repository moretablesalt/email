import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private SERVER_URL = 'https://api.angular-email.com'

  USERNAME_PATH = '/auth/username';
  SIGNUP_PATH = '/auth/signup';

  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<EmailSummary[]>(`${this.SERVER_URL}/emails`);
  }

}
