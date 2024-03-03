import {inject, Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors, Validator} from "@angular/forms";
import {catchError, map, Observable, of} from "rxjs";
import {AuthService} from "../auth.service";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator{
  private authService = inject(AuthService);

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const {value} = control;

    return this.authService.userNameAvailable(control.value).pipe(
      map(value => {
        if (value.available) {
          return null;
        }

        return null;
      }),
      catchError(err => {
        console.log(err);
        if (err.status = 422) {
          return of({nonUniqueUsername: true});
        } else {
          return of({noConnection: true});

        }
      })
    );
    // return of(null);
  }

}
