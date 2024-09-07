import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.css'
})
export class ProblemComponent {
  private dialogRef = inject(MatDialogRef<ProblemComponent>)
  addressProblem: string = '';
  isInvalidAddress: boolean = false;
  isSubmitDisabled: boolean = true;
  uploadPhoto: boolean = false;

  @Output() addProblem = new EventEmitter<boolean>();

  validateForm() {
    this.isInvalidAddress = this.addressProblem.trim().length === 0;
    this.isSubmitDisabled = this.isInvalidAddress;
  }


  onClose(): void {
    this.dialogRef.close();
  }
}
