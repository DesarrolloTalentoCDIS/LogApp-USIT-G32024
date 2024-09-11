import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { user } from '../interfaces/us-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Injecciones de servicios
  private http = inject(HttpClient);

  //Variables
  private baseUrl : string = environment.baseUrl;
  private _user! : user;

  constructor() { }

  //Funciones
  get user(){
    return {...this._user}
  }

  register(usname : string, id : string, pass: string ) {
    const URL =  `${this.baseUrl}/auth/new`;
    const body = {usname, id, pass};


  }

  login(id: string, pass: string) {
    const URL =  `${this.baseUrl}/auth`;
    const body = {id, pass};

    return this.http.post(URL, body);
  }

  validateToken() {
    // const headers = new HttpHeaders().set('Authorization', Bearer ${ token });
  }
}
