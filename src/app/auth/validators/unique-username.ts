import {inject, Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors, Validator} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator{
  private http = inject(HttpClient);

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const {value} = control;

    const SERVER = 'https://api.angular-email.com/auth/username'


    return this.http.post<any>(SERVER, {username: value}).pipe(
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
