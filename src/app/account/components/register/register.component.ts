import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registerFrm: FormGroup;
  private user: User;

  constructor(private accountService: AccountService, private buildFrm: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    // this.registerUser();
  }

  handlerForm(): void {
    console.log(this.registerFrm.value);

  }
  private registerUser(): void {
    const user: User = this.registerFrm.value;
    this.accountService.register(user).subscribe(response => console.log(response))
  }

  private buildForm(): void {
    this.registerFrm = this.buildFrm.group({
      name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      country: [null, [Validators.required]],
      province: [null, [Validators.required]],
      mail: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

}
