import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone"; 
import { CommonModule } from '@angular/common'

@Component({
  selector: 'rivy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports: [IonButton, CommonModule, IonIcon ]
})
export class HeaderComponent  implements OnInit {
    hoveredIndex!: number | null;
  
  company = {
    image: 'https://storage.googleapis.com/payhippo-cdn-bucket/rivy/logo/rivy-pahippo/logo-full-color.svg',

    headerList: [ 
      {path: '', title: 'Products', icon: true},
      {path: '', title: 'Company', icon: true},
      {path: '', title: 'Contact us', icon: false}
    ],
  }

  constructor() { }

  ngOnInit() {}

  onHover(value: number) {
    this.hoveredIndex = value;
  }

  onLeave() {
    this.hoveredIndex = null;
  }
}