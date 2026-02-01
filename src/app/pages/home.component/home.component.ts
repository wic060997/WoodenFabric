import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, RouterLink, NgOptimizedImage],
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[] = [
    'background1.png',
    'background2.png',
    'background3.png'
  ];

  currentIndex = 0;
  bgImage: string = this.images[0];
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startRotation();
  }

  ngOnDestroy(): void {
    this.stopRotation();
  }

  startRotation(): void {
    this.intervalId = setInterval(() => {
      this.nextBackground();
    }, 10000);
  }

  stopRotation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextBackground(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.bgImage = this.images[this.currentIndex];
    this.cdr.detectChanges();
  }
}
