import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChvenebaComponent } from '../chveneba/chveneba.component';

@Component({
  selector: 'app-sms',
  standalone: true,
  imports: [],
  templateUrl: './sms.component.html',
  styleUrl: './sms.component.css'
})
export class SmsComponent {
  private dialogRef = inject(MatDialogRef<ChvenebaComponent>)

  onClose(): void {
    this.dialogRef.close();
  }

  moveToNext(currentInput: HTMLInputElement, nextInput: HTMLInputElement | null): void {
    if (currentInput.value.length === currentInput.maxLength && nextInput) {
      nextInput.focus();
    }
  }

  moveToPrev(currentInput: HTMLInputElement, prevInput: HTMLInputElement | null): void {
    if (prevInput && currentInput.value.length === 0) {
      prevInput.focus();
    }
  }
}
