import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Email} from "./email";

export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private SERVER_URL = 'https://api.angular-email.com'

  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<EmailSummary[]>(`${this.SERVER_URL}/emails`);
  }

  getEmail(id: any) {
    return this.http.get<Email>(`${this.SERVER_URL}/emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.http.post(`${this.SERVER_URL}/emails`, email);
  }
}
