import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ReasonsToChooseComponent } from './pages/reasons-to-choose/reasons-to-choose.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ReasonsToChooseComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
  ]
})
export class ModulesModule { }
