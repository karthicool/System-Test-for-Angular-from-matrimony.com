import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class JsonService {
  constructor(private http: HttpClient) {}

  getData() {
    console.info('calling...');
    return this.http.get('assets/test.json');
  }
}
