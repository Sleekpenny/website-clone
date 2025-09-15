import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonText, IonLabel, IonIcon } from "@ionic/angular/standalone";
import { RouterLink} from '@angular/router';

@Component({
  selector: 'rivy-footer-ad',
  templateUrl: './footer-ad.component.html',
  styleUrls: ['./footer-ad.component.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, IonText, CommonModule, RouterLink]
})
export class FooterAdComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
