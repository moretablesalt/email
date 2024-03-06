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
    // 2 ways to accesss
    // route params
    this.route.params.subscribe(({id}) => {
      console.log('route: ' + id);
    });

    // snapshot
    // might cause an issue if component is resused
    console.log(this.route.snapshot.params['id']);
  }


}
