import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-about-us-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './about-us-dialog.component.html',
  styleUrl: './about-us-dialog.component.css'
})
export class AboutUsDialogComponent {
  @Output() getPreviusItem = new EventEmitter()
  @Output() getNextItem = new EventEmitter()
  @Input() selectedItem: any;
}
