import { Component } from '@angular/core';
import {ModalComponent} from "../../shared/modal/modal.component";
import {CommonModule, NgIf} from "@angular/common";
import {EmailFormComponent} from "../email-form/email-form.component";
import {Email} from "../email";

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

  constructor() {
    this.email = {
      id: '',
      to: '',
      subject: '',
      text: '',
      from: '',
      html: ''
    };
  }


}
