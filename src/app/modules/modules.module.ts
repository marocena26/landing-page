import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AboutUsComponent,
    ContactComponent,
    FormComponent,
    HomeComponent,
    ReasonsToChooseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModulesRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
    TranslateModule,

  ]
})
export class ModulesModule { }

