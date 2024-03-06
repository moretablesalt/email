import { Component } from '@angular/core';
import {ModalComponent} from "../../shared/modal/modal.component";
import {CommonModule, NgIf} from "@angular/common";
import {EmailFormComponent} from "../email-form/email-form.component";
import {Email} from "../email";
import {AuthService} from "../../auth/auth.service";
import {EmailService} from "../email.service";

@Component({
  selector: 'app-email-create',
  standalone: true,
  imports: [
    ModalComponent,
    NgIf,
    CommonModule,
    EmailFormComponent
  ],
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css'
})
export class EmailCreateComponent {
  showModal = false;

  email: Email;

  constructor(private authService: AuthService, private emailService: EmailService) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      text: '',
      from: `${this.authService.username}@angular-email.com`,
      html: ''
    };
  }


  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    })
  }
}
