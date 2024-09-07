import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications-detail',
  standalone: true,
  imports: [],
  templateUrl: './notifications-detail.component.html',
  styleUrl: './notifications-detail.component.css'
})
export class NotificationsDetailComponent {
  message = {
    id: 1,
    date: '25.11.2024',
    title: 'ინფორმაცია ინციდენტზე',
    details: 'გაცნობებთ, რომ ორშაბათს 5 ივნისის...',
    checked: false,
  }
}
