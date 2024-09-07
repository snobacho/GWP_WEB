import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SmsComponent } from '../cabinet/dialogs/sms/sms.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private dialog = inject(MatDialog)
  openSmsPopop(){
    this.dialog.open(SmsComponent)
  }
}
