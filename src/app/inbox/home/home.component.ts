import { Component } from '@angular/core';
import {EmailIndexComponent} from "../email-index/email-index.component";
import {RouterOutlet} from "@angular/router";
import {EmailCreateComponent} from "../email-create/email-create.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EmailIndexComponent,
    RouterOutlet,
    EmailCreateComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
