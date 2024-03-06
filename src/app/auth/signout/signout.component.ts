import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
    this.authService.signout().subscribe(() => {
      this.router.navigateByUrl('/');
    } );
  }

}
