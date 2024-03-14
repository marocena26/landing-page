import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'landing-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public correoEnviadoExitosamente: boolean = false;
  public errorAlEnviarCorreo: boolean = false;

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {}

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return this.translate.instant('validationField');

        case 'minlength':
          return this.translate.instant('validationCharacter', {
            requiredLength: errors['minlength'].requiredLength,
          });

        case 'email':
          return this.translate.instant('validationEmail');
      }
    }

    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.emailService.sendEmail(this.myForm.value).subscribe(
      (response) => {
        console.log('Correo electrónico enviado con éxito!', response);
        this.correoEnviadoExitosamente = true;
        this.errorAlEnviarCorreo = false;
      },
      (error) => {
        console.error('Error al enviar el correo electrónico:', error);
        this.correoEnviadoExitosamente = false;
        this.errorAlEnviarCorreo = true;
      }
    );

    this.myForm.reset();
  }
}
