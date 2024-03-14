import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ReasonsToChooseComponent } from './reasons-to-choose.component';

describe('ReasonsToChooseComponent', () => {
  let component: ReasonsToChooseComponent;
  let fixture: ComponentFixture<ReasonsToChooseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReasonsToChooseComponent],
      imports: [TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(ReasonsToChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
