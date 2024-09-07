import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  private dialogRef = inject(MatDialogRef<MessagesComponent>)

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

  close(){
    this.dialogRef.close()
  }

  toggleAllCheckboxes(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.messages.forEach(message => {
      message.checked = isChecked;
    });
  }
}
