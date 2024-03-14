import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormComponent } from '../../components/form/form.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { ReasonsToChooseComponent } from '../reasons-to-choose/reasons-to-choose.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        AboutUsComponent,
        ReasonsToChooseComponent,
        ContactComponent,
        FormComponent,
      ],
      imports: [TranslateModule.forRoot(), PrimeNgModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
