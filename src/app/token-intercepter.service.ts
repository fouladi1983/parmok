import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import {tap, shareReplay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${authService.getToken()}`
        }
    });
    return next.handle(tokenizedReq);
}
}
