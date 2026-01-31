import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './shared/components/footer.component/footer.component';
import {HeaderComponent} from './shared/components/header.component/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
