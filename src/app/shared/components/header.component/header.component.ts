import {Component, Host, HostBinding, HostListener} from '@angular/core';
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

  private lastScrollTop = 0;

  @HostBinding('class.header-hidden') isHidden = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    this.isHidden = currentScroll > 100 && currentScroll > this.lastScrollTop;

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
