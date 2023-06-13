import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root',
})
export class CigarService {
  constructor(private http: HttpClient) {}

  headers = {
    Authorization: 'Bearer ea1ece5d1ddff9f8b7f70c5047fe36f7',
    'Content-Type': 'application/json',
  };

  options = {
    headers: this.headers,
  };

  fetchCigars() {
    return this.http.get(`${URL}/cigars/index`, this.options);
  }
}
