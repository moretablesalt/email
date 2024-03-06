import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmailService} from "../email.service";
import {switchMap} from "rxjs";
import {Email} from "../email";
import {EmailReplyComponent} from "../email-reply/email-reply.component";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [
    EmailReplyComponent,
    ReactiveFormsModule
  ],
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css'
})
export class EmailShowComponent implements OnInit{

  email!: Email;

  constructor(private route: ActivatedRoute, private emailService: EmailService) {}

  ngOnInit(): void {
    this.route.data.subscribe(({email}) => {
      this.email = email;
    })
  }


}
