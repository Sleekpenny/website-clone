import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { IonLabel, IonIcon, IonText } from '@ionic/angular/standalone';
import { TestimonySliderComponent } from "../testimony-slider/testimony-slider.component";

export interface UserTestimonies { 
contentBody: string,
userName: string,
}
@Component({
  selector: 'rivy-clean-energy',
  templateUrl: './clean-energy.component.html',
  styleUrls: ['./clean-energy.component.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, CommonModule, IonText, TestimonySliderComponent],

})
export class CleanEnergyComponent implements OnInit {
  iconName: string = 'star';

  testimonies: UserTestimonies[] = [
    {
      contentBody:
        'Mr. Ojo Rivy came on board when I was thinking of how to finance my inverter, there is no band A in my             environment but the best bet is for you to go “Band Rivy”. Patience I was relieved of the stress of worrying about the huge upfront cost   of acquiring my inverter and batteries, and I got a payment plan tailored to my needs which made my life real easy. Adenigba Adeoye stress of worrying about the huge upfront cost   of acquiring my inverter and batteries, and I got a payment plan tailored to my needs which made my life real easy. Adenigba Adeoyestress of worrying about the huge upfront cost   of acquiring my inverter and batteries, and I got a payment plan tailored to my needs which made my life real easy. Adenigba Adeoye',
      userName: 'Asemokhe Courage',
    },
    {
      contentBody:
        'Mr. Ojo Rivy came on board when I was thinking of how to finba Adeoye',
      userName: 'Mark',
    },
        {
      contentBody:
        'Mr. Ojo Rivy came on board when I was thinking of how to finance my inverter, there is no band A in my     red to my needs which made my life real easy. Adenigba Adeoye',
      userName: 'Nelson',
    },
        {
      contentBody:
        'Mr. Ojo Rivy came on board when I was thinking of how to finance my inverter, there is no band A in my environment but the best betr and batteries, and I got a payment plan tailored to my needs which made my life real easy. Adenigba Adeoye',
      userName: 'Mummy',
    },
  ];

  title: string = 'Clean Energy Belongs <br> To Everyone';
  intro: string = '...wether you are a ';
  textMsg: string =
    'Business owner <br> Micro-grid Contractor <br> or a Home owner ';

  constructor() {}

  ngOnInit() {
  }


}
