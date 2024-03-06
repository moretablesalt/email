import {Component, Input, OnInit} from '@angular/core';
import {Email} from "../email";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "../../shared/input/input.component";

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent
  ],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent implements OnInit{
  @Input('email') email!: Email;

  emailForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    const {subject, to, from, text} = this.email
    this.emailForm = new FormGroup({
      to: new FormControl(to),
      from: new FormControl(from),
      subject: new FormControl(subject),
      text: new FormControl(text)
    });
  }

}
