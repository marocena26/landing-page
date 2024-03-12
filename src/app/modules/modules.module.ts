import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ReasonsToChooseComponent } from './pages/reasons-to-choose/reasons-to-choose.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { TranslateModule,  } from '@ngx-translate/core';
import { ContactComponent } from './pages/contact/contact.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ReasonsToChooseComponent,
    ContactComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    PrimeNgModule,
    TranslateModule
  ]
})
export class ModulesModule { }

