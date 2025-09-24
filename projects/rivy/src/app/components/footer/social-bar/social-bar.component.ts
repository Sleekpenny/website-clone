import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'rivy-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.scss'],
  standalone: true,
  imports: [IonLabel, CommonModule],
})
export class SocialBarComponent implements OnInit {
  email: string = 'hello@rivy.co';
  socialImages = [
    'assets/icon/download (1).svg',
    'assets/icon/download (2).svg',
    'assets/icon/download (3).svg',
    'assets/icon/download (4).svg',
  ];
  constructor() {}

  ngOnInit() {}
}
