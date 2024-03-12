import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'landing-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  // constructor(private fb: FormBuilder) {}

  // contactForm: FormGroup = this.fb.group({
  //   nombre: new FormControl('', [Validators.required]),
  //   apellido: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   mensaje: new FormControl('', [Validators.required]),
  //   movil: new FormControl(''),
  // });
}
