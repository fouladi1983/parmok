import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrokerComponent } from './broker/broker.component';
import { ChartsModule } from 'ng2-charts';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { TokenIntercepterService } from './token-intercepter.service';
import { ServiceTestComponent } from './service-test/service-test.component';
import { BaseMetalComponent } from './base-metal/base-metal.component';
import { PreciousMetalComponent } from './precious-metal/precious-metal.component';
import { AgriculturalComponent } from './agricultural/agricultural.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { AmericaIndeciesComponent } from './america-indecies/america-indecies.component';
import { EuropeIndeciesComponent } from './europe-indecies/europe-indecies.component';
import { AsiaPacificIndeciesComponent } from './asia-pacific-indecies/asia-pacific-indecies.component';
import { AuthService } from './auth.service';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrokerComponent,
    CompanyInfoComponent,
    ServiceTestComponent,
    BaseMetalComponent,
    PreciousMetalComponent,
    AgriculturalComponent,
    ContactComponent,
    AboutComponent,
    AmericaIndeciesComponent,
    EuropeIndeciesComponent,
    AsiaPacificIndeciesComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeToken,
      deps:[AuthService],
      multi:true
    }
  ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIntercepterService,
    multi: true
  },
  {
    provide: RECAPTCHA_SETTINGS,
    useValue: { siteKey: '6LeV06QUAAAAAFBBoBEr0ZA8BQQHhoAjI2qTmYb_' } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeToken( authService: AuthService){
  return ():Promise<any>=>{
    return authService.load();
  }
}
