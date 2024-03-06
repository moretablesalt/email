import { Component } from '@angular/core';
import {ModalComponent} from "../../shared/modal/modal.component";
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-email-create',
  standalone: true,
  imports: [
    ModalComponent,
    NgIf,
    CommonModule
  ],
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css'
})
export class EmailCreateComponent {
  showModal = false;

}
