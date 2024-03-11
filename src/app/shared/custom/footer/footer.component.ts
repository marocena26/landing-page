import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    this.currentYear = new Date().getFullYear();
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }


  ngOnInit(): void {}

}
