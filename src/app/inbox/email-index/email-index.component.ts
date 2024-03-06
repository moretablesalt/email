import {Component, OnInit} from '@angular/core';
import {EmailService, EmailSummary} from "../email.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-email-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css'
})
export class EmailIndexComponent implements OnInit {

  emails: EmailSummary[] = [];
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe(emails => {
      this.emails = emails;
      console.log(emails);
    });
  }
}
