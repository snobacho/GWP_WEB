import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  messages = [
    {
      id: 1,
      date: '25.11.2024',
      title: 'ინფორმაცია ინციდენტზე',
      details: 'გაცნობებთ, რომ ორშაბათს 5 ივნისის...',
      checked: false,
    },
    {
      id: 2,
      date: '25.10.2024',
      title: 'ინფორმაცია ინციდენტზე',
      details: 'გაცნობებთ, რომ სამშაბათს 6 ივნისის...',
      checked: false,
    },
    {
      id: 3,
      date: '25.11.2024',
      title: 'ინფორმაცია ინციდენტზე',
      details: 'გაცნობებთ, რომ ორშაბათს 5 ივნისის...',
      checked: false,
    },
    {
      id: 4,
      date: '25.10.2024',
      title: 'ინფორმაცია ინციდენტზე',
      details: 'გაცნობებთ, რომ სამშაბათს 6 ივნისის...',
      checked: false,
    },
    {
      id: 5,
      date: '25.11.2024',
      title: 'ინფორმაცია ინციდენტზე',
      details: 'გაცნობებთ, რომ ორშაბათს 5 ივნისის...',
      checked: false,
    },
    {
      id: 6,
      date: '25.10.2024',
      title: 'ინფორმაცია ინციდენტზე',
      details: 'გაცნობებთ, რომ სამშაბათს 6 ივნისის...',
      checked: false,
    },
  ];

  choosedMessage = this.messages[0]
}
