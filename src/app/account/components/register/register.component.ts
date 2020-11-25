import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { AccountService } from '../../services/account.service';
import { DataListService } from '../../services/data-list.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerFrm: FormGroup;
  private user: User;
  public lists;
  public departaments;

  private regexNames = '^[a-zA-ZÀ-ÿ-ZñÑáéíóúÁÉÍÓÚ\u00f1\u00d1s ]+$';

  constructor(
    private accountService: AccountService,
    private buildFrm: FormBuilder,
    private countries: DataListService
  ) {
    this.buildForm();
    this.lists = countries.getConuntrie();
  }

  ngOnInit(): void {}

  public handlerForm(): void {
    console.log(this.registerFrm.value);
    if (
      this.registerFrm.valid &&
      !this.passwordsNoMatch('password', 'confirm_password')
    ) {
      this.registerUser();
    } else {
      this.registerFrm.markAllAsTouched();
    }
  }
  private registerUser(): void {
    const user: User = this.registerFrm.value;
    this.accountService
      .register(user)
      .subscribe((response) => console.log(response));
  }

  public selectDepartament(): void {
    const countrie = this.registerFrm.get('country').value;
    this.departaments = this.countries.getDepartaments(countrie);
  }

  public controlError(controlName) {
    const control = this.registerFrm.controls[controlName];
    if (control.touched || control.dirty) {
      return control.errors;
    }
  }

  passwordsNoMatch(password, confirmPassword) {
    if (
      this.registerFrm.controls[password].valid &&
      this.registerFrm.controls[confirmPassword].valid
    ) {
      return (
        this.registerFrm.controls[password].value !==
        this.registerFrm.controls[confirmPassword].value
      );
    }
  }

  private buildForm(): void {
    this.registerFrm = this.buildFrm.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern(this.regexNames),
        ],
      ],
      last_name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern(this.regexNames),
        ],
      ],
      country: [null, [Validators.required]],
      province: [null, [Validators.required]],
      mail: [null, [Validators.required, Validators.email]],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      password: [
        null,
        [Validators.required, Validators.pattern('^([a-z0-9]){6,12}$')],
      ],
      confirm_password: [
        null,
        [Validators.required, Validators.pattern('^([a-z0-9]){6,12}$')],
      ],
      terms_conditions: [null, [Validators.requiredTrue]],
    });
  }
}
