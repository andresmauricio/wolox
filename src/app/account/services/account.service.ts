import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  public register(user) {
    const api = 'http://private-anon-4aec09aec7-woloxfrontendinverview.apiary-mock.com/signup';
    return this.httpClient.post(api, user);
  }
}
