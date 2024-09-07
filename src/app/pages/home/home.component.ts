import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeComponent {
  breakpoints = {
    240: {
      slidesPerView: 1,
 
    },
    350: {
      slidesPerView: 1.3,
 
    },
    380: {
      slidesPerView: 1.5,
      
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
}
