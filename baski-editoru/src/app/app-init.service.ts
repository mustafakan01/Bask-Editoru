// app-init.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppInitService {
  constructor(private http: HttpClient) { }

  init() {
    return this.http.get('https://my-api.com/data').toPromise();
  }
}
