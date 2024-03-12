import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Advantages } from 'src/app/interfaces/advantages';

@Component({
  selector: 'reasons-to-choose',
  templateUrl: './reasons-to-choose.component.html',
  styleUrls: ['./reasons-to-choose.component.scss']
})
export class ReasonsToChooseComponent {

  advantages: Advantages[] = [];


  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.loadAdvantages();
    });

    this.loadAdvantages();
  }

  private loadAdvantages() {
    this.advantages = [
      {
        img: 'heart.svg',
        name: this.translate.instant('advantageSubTitle'),
        description: this.translate.instant('advantageDescription'),
      },
      {
        img: 'notes.svg',
        name: this.translate.instant('advantageSubTitle2'),
        description: this.translate.instant('advantageDescription2'),
      },
      {
        img: 'cat.svg',
        name: this.translate.instant('advantageSubTitle3'),
        description: this.translate.instant('advantageDescription3'),
      },
    ];
  }

}
