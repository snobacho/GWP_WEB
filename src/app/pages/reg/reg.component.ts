import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SmsComponent } from '../cabinet/dialogs/sms/sms.component';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {
  signupForm: FormGroup | any;

  private fb = inject(FormBuilder)
  private dialog = inject(MatDialog)
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      personalNumber: ['', Validators.required],
      abonentNumber: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue],
      privacyAccepted: [false, Validators.requiredTrue]
    });
  }


  onSubmit(): void {
    this.dialog.open(SmsComponent)
  }
}
