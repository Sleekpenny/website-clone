import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rivy-testimony-slider',
  templateUrl: './testimony-slider.component.html',
  styleUrls: ['./testimony-slider.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonySliderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
