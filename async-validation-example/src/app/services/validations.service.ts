import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  public constructor(
    private _authService: AuthService
  ) { }

  public usernameValidation(control: AbstractControl): Observable<ValidationErrors | null> {
    return this._authService.userExist(control.value)
      .pipe( map( (response: number) => {

        return response ? { userAlreadyExist: 'El usuario ya existe' } : null;
      }));
  }

  // public usernameValidation(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     return this._authService.userExist(control.value)
  //       .pipe( map( (response: number) => {
  //         return response ? { userAlreadyExist: 'El usuario ya existe' } : null;
  //       }));
  //   };
  // }

}
