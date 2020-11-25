import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tech } from '../models/Tech';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  constructor(private httpClient: HttpClient) { }

  getAllTechs(): Observable<Tech[]> {
    const url = 'https://private-anon-4aec09aec7-woloxfrontendinverview.apiary-mock.com/techs'
    return this.httpClient.get<Tech[]>(url);
  }
}
