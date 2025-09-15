import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  IonLabel,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';
import { FAQCollections } from 'src/app/interface/faq.interface';

@Component({
  selector: 'rivy-faq-listing',
  templateUrl: './faq-listing.component.html',
  styleUrls: ['./faq-listing.component.scss'],
  standalone: true,
  imports: [
    IonLabel,
    CommonModule,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonIcon,
  ],
})
export class FaqListingComponent implements OnInit {
  @Input() faqItems!: FAQCollections[];

  constructor() {}

  ngOnInit() {}

   toggleFAQ(selectedValue: number): void {
      // First, close all FAQs
      this.faqItems.forEach((item) => {
        item.isActive = false;
      });
  
      // Then open the selected one (or keep closed if it was already open)
      const selectedItem = this.faqItems.find(
        (item) => item.value === selectedValue
      );
      if (selectedItem) {
        selectedItem.isActive = true;
      }
    }
}
