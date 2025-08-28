import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rivy-ad-energy-card',
  templateUrl: './ad-energy-card.component.html',
  styleUrls: ['./ad-energy-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AdEnergyCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
