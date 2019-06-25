import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseUrl: string;
  token: string;
  httpHeaders: HttpHeaders;

  constructor(protected http: HttpClient) {
    this.baseUrl = "http://127.0.0.1:8000/api/v1/";
    this.token = "Token " + JSON.parse(localStorage.getItem('currentToken')).token;
    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.token});
  }
}