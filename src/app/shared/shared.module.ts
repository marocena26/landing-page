import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './custom/footer/footer.component';
import { NavBarComponent } from './custom/nav-bar/nav-bar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
  ],
})
export class SharedModule { }
