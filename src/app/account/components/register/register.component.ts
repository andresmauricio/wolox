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

  constructor(
    private accountService: AccountService,
    private buildFrm: FormBuilder,
    private countries: DataListService
  ) {
    this.buildForm();
    this.lists = countries.getConuntrie();
  }

  ngOnInit(): void { }

  handlerForm(): void {
    console.log(this.registerFrm.value);
    if (this.registerFrm.valid) {
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

  public selectDepartament() {
    const countrie = this.registerFrm.get('country').value;
    this.departaments = this.countries.getDepartaments(countrie);
  }

  private buildForm(): void {
    this.registerFrm = this.buildFrm.group({
      name: [null, [Validators.required, Validators.maxLength(30)]],
      last_name: [null, [Validators.required, Validators.maxLength(30)]],
      country: [null, [Validators.required]],
      province: [null, [Validators.required]],
      mail: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirm_password: [null, [Validators.required]],
      terms_conditions: [null, [Validators.requiredTrue]]
    });
  }
}
