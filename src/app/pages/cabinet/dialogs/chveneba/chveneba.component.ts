import { DialogModule } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chveneba',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './chveneba.component.html',
  styleUrl: './chveneba.component.css'
})
export class ChvenebaComponent {
  private dialogRef = inject(MatDialogRef<ChvenebaComponent>)

  onClose(): void {
    this.dialogRef.close();
  }
}
