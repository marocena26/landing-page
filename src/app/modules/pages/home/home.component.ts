import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sidebarVisible: boolean = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); 
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
