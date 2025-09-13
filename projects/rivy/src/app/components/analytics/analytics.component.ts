import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { analyticCard, AnalyticsCardComponent } from "../cards-folder/analytics-card/analytics-card.component";

@Component({
  selector: 'rivy-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  standalone: true,
  imports: [CommonModule, AnalyticsCardComponent]
})
export class AnalyticsComponent  implements OnInit {

  @Input() analytics!: analyticCard[];

  constructor() { }

  ngOnInit() {}

}
