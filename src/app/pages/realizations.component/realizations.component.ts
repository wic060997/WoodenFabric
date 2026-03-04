import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RealizationItem} from '../../core/models/realization-item.interface';

@Component({
  selector: 'app-realizations',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './realizations.component.html',
  styleUrl: './realizations.component.css',
})
export class RealizationsComponent implements OnInit {
  readonly basePath = '/realizations/';

  realizations: RealizationItem[] = [];
  selectedImage: RealizationItem | null = null;

  ngOnInit() {
    this.generateRealizations();
  }

  generateRealizations() {
    this.realizations = Array.from({length: 16}, (_, i) => {
      const num = i + 1;
      return {
        id: num,
        fileName: `${num}.jpg`,
        title: `Realization Project ${num}`
      };
    });
  }

  openLightbox(item: RealizationItem) {
    this.selectedImage = item;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}
