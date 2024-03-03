import {inject, Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors, Validator} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator{
  private http = inject(HttpClient);

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const {value} = control;

    const SERVER = 'https://api.angular-email.com/auth/username'

    console.log(this.http);
    // return this.http.post<any>(SERVER, {username: value});
    return of(null);
  }

}
