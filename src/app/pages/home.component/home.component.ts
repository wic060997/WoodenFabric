import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.startRotation();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  images: string[] = [
    'background1.png',
    'background2.png',
    'background3.png'];

  currentIndex = 0;
  bgImage = this.images[this.currentIndex];
  intervalId: any;

  startRotation(): void {
    this.intervalId = setInterval(() => {
      this.nextBackground();
    }, 10000);
  }

  nextBackground(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.bgImage = this.images[this.currentIndex];
  }
}
