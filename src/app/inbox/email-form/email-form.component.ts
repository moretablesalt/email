import {Component, Input, OnInit} from '@angular/core';
import {Email} from "../email";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
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
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({value: from, disabled: true}),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }

    console.log(this.emailForm.getRawValue());
  }

}
