import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { user } from '../interfaces/us-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl : string = environment.baseUrl;
  private _user! : user;

  get user() {
    return {...this._user}
  }

  constructor(private http : HttpClient) { }
}
