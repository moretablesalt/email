import { Component } from '@angular/core';
import {EmailIndexComponent} from "../email-index/email-index.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EmailIndexComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
