import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './custom/footer/footer.component';
import { NavBarComponent } from './custom/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    TranslateModule,
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
  ],
})
export class SharedModule {}
