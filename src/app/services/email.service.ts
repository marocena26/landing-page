import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(formData: any) {
    const formUrl = 'https://formspree.io/f/xbjnlvgv';
    return this.http.post<any>(formUrl, formData);
  }
}
