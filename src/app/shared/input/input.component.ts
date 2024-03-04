import {Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl, Form, FormControl,
  ReactiveFormsModule,
} from "@angular/forms";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
  @Input() control!: AbstractControl | null;
  controlAsFormControl!: FormControl;
  @Input() inputType!: string;

  ngOnInit(): void {
    // need FormControl
    this.controlAsFormControl = this.control as FormControl<any>;
  }


  showErrors() {
    if (this.control) {
      const { dirty, errors, touched } = this.control;
      // console.log('dirty: ' + dirty)
      // console.log('errors: ' + errors)
      // console.log('touched: ' + touched)
      return dirty && errors && touched;
    }
    return false;
  }
}
