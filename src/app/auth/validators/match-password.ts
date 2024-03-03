import {AbstractControl, ValidationErrors, Validator} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class MatchPassword implements Validator{
  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {

    const {password, passwordConfirmation} = control.value;

    if (password === passwordConfirmation) return null;

    return {passwordsDontMatch: true};
  }
}
