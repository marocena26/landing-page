import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { HomeComponent } from './home.component';
import { FormComponent } from '../../components/form/form.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { ReasonsToChooseComponent } from '../reasons-to-choose/reasons-to-choose.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutUsComponent,
        ContactComponent,
        FormComponent,
        HomeComponent,
        ReasonsToChooseComponent,
      ],
      imports: [
        PrimeNgModule,
        TranslateModule.forRoot(),
      ],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeLanguage', () => {
    it('should change language successfully', () => {
      // Arrange
      spyOn(translateService, 'use');

      // Act
      component.changeLanguage('es');

      // Assert
      expect(translateService.use).toHaveBeenCalledWith('es');
    });
  });

  describe('onHover', () => {
    it('should set sidebarVisible to true when hover is true', () => {
      // Act
      component.onHover(true);

      // Assert
      expect(component.sidebarVisible).toBeTrue();
    });

    it('should not change sidebarVisible when hover is false', () => {
      // Arrange
      component.sidebarVisible = true;

      // Act
      component.onHover(false);

      // Assert
      expect(component.sidebarVisible).toBeTrue();
    });
  });
});
