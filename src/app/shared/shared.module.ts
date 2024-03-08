import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './custom/footer/footer.component';
import { NavBarComponent } from './custom/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
  ],
})
export class SharedModule { }
