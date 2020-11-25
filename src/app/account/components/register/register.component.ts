import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.registerUser();
  }

  private registerUser() {
    const user = {
      name: 'Joe',
      last_name: 'Doe',
      country: 'argentina',
      province: 'buenos_aires',
      mail: 'joe.doe@gmail.com',
      phone: '47468900',
      password: 'abc12345678',
    };
    this.accountService.register(user).subscribe(response => console.log(response))
  }
}
