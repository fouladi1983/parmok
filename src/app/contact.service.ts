import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }

  contactUrl = 'http://192.168.100.197/contactUs';
  recaptchaUrl = 'http://192.168.100.197/recaptcha';

  verifyCaptcha(captchaToken){
    return this._http.post(this.recaptchaUrl,{
      response: captchaToken
    })
  }

  sendMessage(email,message){
    return this._http.post(this.contactUrl,{
      email: email,
      message: message
    })
  }
}
