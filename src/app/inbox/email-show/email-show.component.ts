import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [],
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css'
})
export class EmailShowComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      console.log('route: ' + id);
    });
  }


}
