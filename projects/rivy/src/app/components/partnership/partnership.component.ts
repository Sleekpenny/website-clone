import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonText, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'rivy-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule, IonText]
})
export class PartnershipComponent  implements OnInit {

  title: string = 'Our partners';
  body: string = 'We are proud to work with some of the most forward-thinking partners. Together, we are making clean energy flow further, faster, and fairer.'

  partnerLogos = [
    'https://rivy.co/assets/partners-ycombinator-BOW6Sfyb.svg', 'https://rivy.co/assets/partners-echovc-WBAiJZNv.svg', 'https://rivy.co/assets/partners-mercycorps-RgijAJjE.svg', 'https://rivy.co/assets/partners-allon-TZr3-8_q.svg', 'https://rivy.co/assets/partners-launchafrica-CYfUDOZm.svg'
  ]

  constructor() { }

  ngOnInit() {}

}
