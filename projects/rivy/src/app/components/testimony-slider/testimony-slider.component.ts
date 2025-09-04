import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UserTestimonies } from '../clean-energy/clean-energy.component';

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
    @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
    @Input() testimonies!: UserTestimonies[];

  constructor() { }

  ngOnInit() {}

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
