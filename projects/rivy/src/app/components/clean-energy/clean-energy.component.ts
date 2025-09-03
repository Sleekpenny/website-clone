import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import { IonLabel, IonIcon, IonText } from '@ionic/angular/standalone';
@Component({
  selector: 'rivy-clean-energy',
  templateUrl: './clean-energy.component.html',
  styleUrls: ['./clean-energy.component.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, CommonModule, IonText],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class CleanEnergyComponent implements OnInit, AfterViewInit {
  iconName: string = 'star';
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;

  testimonies = [
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

  title: string = 'Clean Energy Belongs <bt> To Everyone';
  intro: string = '...wether you are a ';
  textMsg: string =
    'Business owner <br> Micro-grid Contractor <br> or a Home owner ';

  constructor() {}

  ngOnInit() {
    //this.initSwiper();
  }

  // initSwiper() {
  //   const swiperEl: any = document.querySelector('swiper-container');
  //   const buttonNext: any = document.getElementById('next-button');
  //   const buttonPrev: any = document.getElementById('prev-button');

  //   buttonNext.addEventListener('click', () => {
  //     swiperEl.swiper.slideNext();
  //   });

  //   buttonPrev.addEventListener('click', () => {
  //     swiperEl.swiper.slidePrev();
  //   });
  // }

  ngAfterViewInit() {

  }

 private swiperInstance: any;
    onSwiperInit(event: any) {
    console.log('Swiper initialized:', event);
    this.swiperInstance = event.detail?.[0] || event.target?.swiper;
    console.log('Swiper instance:', this.swiperInstance);
  }
  nextSlide() {
    console.log('Next clicked, swiper instance:', this.swiperInstance);
    if (this.swiperInstance) {
      this.swiperInstance.slideNext();
    } else {
      console.error('Swiper instance not available');
      this.fallbackNext();
    }
  }

  prevSlide() {
    console.log('Prev clicked, swiper instance:', this.swiperInstance);
    if (this.swiperInstance) {
      this.swiperInstance.slidePrev();
    } else {
      console.error('Swiper instance not available');
      this.fallbackPrev();
    }
  }

  // Fallback methods
  fallbackNext() {
    const swiperEl = this.swiperContainer?.nativeElement;
    if (swiperEl?.swiper) {
      swiperEl.swiper.slideNext();
    }
  }

  fallbackPrev() {
    const swiperEl = this.swiperContainer?.nativeElement;
    if (swiperEl?.swiper) {
      swiperEl.swiper.slidePrev();
    }
  }
}
