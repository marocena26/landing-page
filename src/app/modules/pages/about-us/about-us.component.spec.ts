import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsComponent],
      imports: [
        PrimeNgModule,
        TranslateModule.forRoot(),
      ]
    });
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
