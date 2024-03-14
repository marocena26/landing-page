import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [TranslateModule.forRoot(), PrimeNgModule]
    });
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
