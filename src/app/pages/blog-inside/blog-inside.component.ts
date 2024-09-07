import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-blog-inside',
  standalone: true,
  imports: [],
  templateUrl: './blog-inside.component.html',
  styleUrl: './blog-inside.component.css',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BlogInsideComponent {
  breakpoints = {
    240: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
}
