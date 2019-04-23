import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl, Validators } from '@angular/forms';
import { ValidationsService } from './services/validations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public formUsername: FormGroup = this._fb.group({
    // 'username': this._fb.control('', [Validators.required, Validators.pattern('\\w+')], this._validationsService.usernameValidation)
    'username': this._fb.control('', [Validators.required, Validators.pattern('\\w+')], this._validationsService.usernameValidation.bind(this._validationsService))

    // 'username': this._fb.control('', [Validators.required, Validators.pattern('\\w+')], this._validationsService.usernameValidation())
    // 'username': new FormControl('', [Validators.required, Validators.pattern('\\w+')], this._validationsService.usernameValidation())
    // 'username': ['', [Validators.required, Validators.pattern('\\w+')], this._validationsService.usernameValidation()]
  });

  public constructor(
    private _fb: FormBuilder,
    private _validationsService: ValidationsService
  ) { }

  public get username(): AbstractControl {
    return this.formUsername.get('username');
  }

  public sendForm(): void {
    console.log(this.formUsername.value);
  }

}
