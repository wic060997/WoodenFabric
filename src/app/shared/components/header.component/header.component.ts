import {Component} from '@angular/core';
import {APP_NAME} from '../../../app.config';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule, RouterModule, NgOptimizedImage]
})
export class HeaderComponent {
  protected readonly APP_NAME = APP_NAME;
}
