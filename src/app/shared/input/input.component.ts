import {Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl, Form, FormControl,
  ReactiveFormsModule,
} from "@angular/forms";


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
  @Input() control!: AbstractControl;
  controlAsFormControl!: FormControl;

  ngOnInit(): void {
    // need FormControl
    this.controlAsFormControl = this.control as FormControl<any>;
  }


}
