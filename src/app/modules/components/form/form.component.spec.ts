import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { EmailService } from 'src/app/services/email.service';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let translateService: TranslateService;
  let emailService: EmailService;
  let myForm: FormGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        HttpClientTestingModule,
        PrimeNgModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
      ],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    emailService = TestBed.inject(EmailService);
    myForm = component.myForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // =============== TEST FOR getFieldError ===============

  it('should return null when field has no errors', () => {
    // Arrange
    component.myForm = new FormGroup({
      someField: new FormControl(null),
    });

    // Act
    const result = component.getFieldError('someField');

    // Assert
    expect(result).toBeNull();
  });

  it('should return translated validationField message for required error', () => {
    // Arrange
    component.myForm = new FormGroup({
      requiredField: new FormControl(null, Validators.required),
    });

    // Spy on translate.instant method
    spyOn(translateService, 'instant').and.returnValue(
      'Translated validationField message'
    );

    // Act
    const result = component.getFieldError('requiredField');

    // Assert
    expect(result).toBe('Translated validationField message');
    expect(translateService.instant).toHaveBeenCalledWith('validationField');
  });

  it('should return translated validationCharacter message with required length for minlength error', () => {
    // Arrange
    const minLength = 5;
    component.myForm = new FormGroup({
      minLengthField: new FormControl('123', Validators.minLength(minLength)),
    });

    // Spy on translate.instant method
    spyOn(translateService, 'instant').and.returnValue(
      'Translated validationCharacter message'
    );

    // Act
    const result = component.getFieldError('minLengthField');

    // Assert
    expect(result).toBe('Translated validationCharacter message');
    expect(translateService.instant).toHaveBeenCalledWith(
      'validationCharacter',
      { requiredLength: minLength }
    );
  });

  it('should return translated validationEmail message for email error', () => {
    // Arrange
    component.myForm = new FormGroup({
      emailField: new FormControl('invalidEmail', Validators.email),
    });

    // Spy on translate.instant method
    spyOn(translateService, 'instant').and.returnValue(
      'Translated validationEmail message'
    );

    // Act
    const result = component.getFieldError('emailField');

    // Assert
    expect(result).toBe('Translated validationEmail message');
    expect(translateService.instant).toHaveBeenCalledWith('validationEmail');
  });

  // =============== TEST FOR onSave ===============

  it('should mark form as touched and return when form is invalid', () => {
    // Arrange
    spyOn(myForm, 'markAllAsTouched');

    // Act
    component.onSave();

    // Assert
    expect(myForm.markAllAsTouched).toHaveBeenCalled();
  });
});
