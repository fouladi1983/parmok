import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrokerComponent } from './broker/broker.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ServiceTestComponent } from './service-test/service-test.component';
import { BaseMetalComponent } from './base-metal/base-metal.component';
import { PreciousMetalComponent } from './precious-metal/precious-metal.component';
import { AgriculturalComponent } from './agricultural/agricultural.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AmericaIndeciesComponent } from './america-indecies/america-indecies.component';
import { AsiaPacificIndeciesComponent } from './asia-pacific-indecies/asia-pacific-indecies.component';
import { EuropeIndeciesComponent } from './europe-indecies/europe-indecies.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'broker',
    component: BrokerComponent
  },
  {
    path: 'company-info',
    component: CompanyInfoComponent
  },
  {
    path: 'test',
    component: ServiceTestComponent
  },{
    path: 'base-metal',
    component: BaseMetalComponent
  },
  {
    path: 'precious-metal',
    component: PreciousMetalComponent
  },
  {
    path: 'agricultural',
    component: AgriculturalComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'america-indecies',
    component: AmericaIndeciesComponent
  },
  {
    path: 'asia-pacific-indecies',
    component: AsiaPacificIndeciesComponent
  },
  {
    path: 'europe-indecies',
    component: EuropeIndeciesComponent
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
