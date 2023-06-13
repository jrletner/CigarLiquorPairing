import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root',
})
export class LiquorService {
  constructor(private http: HttpClient) {}

  fetchLiquors() {
    const headers = {
      Authorization: `Bearer ${environment.Token}`,
      'Content-Type': 'application/json',
    };

    const options = {
      headers: headers,
    };

    return this.http.get(`${URL}/liquors/index`, options);
  }
}
