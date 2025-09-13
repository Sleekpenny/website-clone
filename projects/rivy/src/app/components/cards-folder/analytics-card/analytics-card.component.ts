import { Component, Input, OnInit } from '@angular/core';
import { IonText, IonLabel } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common'

export interface analyticCard {
  image: string,
  subTitle: string,
  title: string,
  background: string,
}
@Component({
  selector: 'rivy-analytics-card',
  templateUrl: './analytics-card.component.html',
  styleUrls: ['./analytics-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonText, IonLabel]
})
export class AnalyticsCardComponent  implements OnInit {
  
  @Input() dynamicColor: boolean = true;
  @Input() analytic!: analyticCard;

  constructor() {}
  ngOnInit() {}

}
