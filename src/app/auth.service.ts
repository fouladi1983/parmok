import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  private _token;

  private url = "http://192.168.100.197/login";
  private userCredential = {
    username: "test",
    password: "test",
    userkey: "583F4CF6-E5CB-4B82-A9D7-BB89285BDB4A"
  };

  getToken(){
    return localStorage.getItem('_token');
  }

  load(){
    return new Promise<void>((resolve, reject)=>{
      this._http.post(this.url,this.userCredential).subscribe(data => {
        localStorage.setItem('_token',data['token']);
        resolve();
      })
    })
  }
}
