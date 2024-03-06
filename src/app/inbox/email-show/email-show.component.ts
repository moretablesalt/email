import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmailService} from "../email.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [],
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css'
})
export class EmailShowComponent implements OnInit{

  constructor(private route: ActivatedRoute, private emailService: EmailService) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => {
        return this.emailService.getEmail(id);
      })
    ).subscribe(email => {
      console.log(email)
    });
  }


}
