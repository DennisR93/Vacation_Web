import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../../core/components/header/header.component';
import {FooterComponent} from '../../core/components/footer/footer.component';

@Component({
  selector: 'app-app-layout',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
  standalone: true
})
export class AppLayoutComponent {

}
