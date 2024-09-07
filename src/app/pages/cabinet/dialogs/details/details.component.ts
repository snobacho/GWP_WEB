import { DialogModule } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SmsComponent } from '../sms/sms.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  detailsForm: FormGroup | any;
  private dialogRef = inject(MatDialogRef<DetailsComponent>)
  private fb = inject(FormBuilder)
  private dialog = inject(MatDialog)
  ngOnInit(): void {
    this.detailsForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      personalNumber: ['', Validators.required],
      abonentNumber: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{9,10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue],
      privacyAccepted: [false, Validators.requiredTrue]
    })
  }

  onClose(){
    this.dialogRef.close()
  }

  openSmsPopup(): void {
    const dialog = this.dialog.open(SmsComponent)
    this.onClose()
  }
}
