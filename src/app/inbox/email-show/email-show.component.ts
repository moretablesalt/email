import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmailService} from "../email.service";

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
    // 2 ways to accesss
    // route params
    this.route.params.subscribe(({id}) => {
      this.emailService.getEmail(id).subscribe(email => {console.log(email)});
    });
  }


}
