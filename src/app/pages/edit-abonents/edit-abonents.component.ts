import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SmsComponent } from '../cabinet/dialogs/sms/sms.component';

@Component({
  selector: 'app-edit-abonents',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-abonents.component.html',
  styleUrl: './edit-abonents.component.css'
})
export class EditAbonentsComponent {
  abonentsForm: FormGroup | any;

  private fb = inject(FormBuilder)
  private dialog = inject(MatDialog)

  ngOnInit(): void {
    this.abonentsForm = this.fb.group({
      abonentNumber: ['', Validators.required],
      cadastralCode: ['', Validators.required],
      populationCount: ['', Validators.required],
      contactInfo: ['', Validators.required],
      deathCase: [false],
      receiveEmail: [false, Validators.required],
      receiveSMS: [false, Validators.required],
      personalInfoUsage: [false, Validators.required],
      utilityInfoSharing: [false, Validators.required],
      electronicReceiptAgreement: [false, Validators.required],
    });
  }

  onSubmit(): void {
    this.dialog.open(SmsComponent)
  }
}
