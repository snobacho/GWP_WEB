import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SmsComponent } from '../cabinet/dialogs/sms/sms.component';
import { DialogModule } from '@angular/cdk/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DialogModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup | any;
  currentSlide: number = 0;
  showPassword = false

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usernumber: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl(false)
    });
    setInterval(() => {
      if(this.currentSlide == 2){
        this.currentSlide = 0
      }else {
        ++this.currentSlide
      }
    }, 5000);
  }

  openPopup() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      // Logic to open the popup or handle form submission
    } else {
      console.log('Form is invalid');
    }
  }

  setCurrentSlide(index: number) {
    this.currentSlide = index;
  }

  private dialog = inject(MatDialog)

  onSubmit(): void {
    this.dialog.open(SmsComponent)
  }
}
