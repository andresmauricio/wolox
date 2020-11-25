import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  public register(user: User) {
    const api = 'https://private-anon-4aec09aec7-woloxfrontendinverview.apiary-mock.com/signup';
    return this.httpClient.post(api, user);
  }
}
