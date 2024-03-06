import {CanLoad, Route, Router, UrlSegment, UrlTree} from "@angular/router";
import {map, Observable, skipUntil, skipWhile, take, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.authService);
    return this.authService.signedin$.pipe(
      skipWhile( value => value === null),
      take(1),
      map(value => {
        if (value) {
          return true;
        } else {
          return false;
        }
      }),
      tap((authenticated => {
        if (!authenticated) {
          this.router.navigateByUrl('/auth');
        }
      }))
    );
  }

}
