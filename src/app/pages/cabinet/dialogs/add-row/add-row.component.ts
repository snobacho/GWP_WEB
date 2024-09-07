import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-row.component.html',
  styleUrl: './add-row.component.css'
})
export class AddRowComponent {
  isInvalidAbonentNumber: boolean = false;
  isSubmitDisabled: boolean = true;
  private dialogRef = inject(MatDialogRef<AddRowComponent>)

  validateAbonentNumber() {
    const abonentNumber = (document.getElementById('abonentNumber') as HTMLInputElement).value;
    this.isInvalidAbonentNumber = abonentNumber.length !== 7;
    this.isSubmitDisabled = this.isInvalidAbonentNumber || abonentNumber.trim().length === 0;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
