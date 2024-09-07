import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CareerDialogComponent } from './career-dialog/career-dialog.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  openedTab = 1
  workButton = 1
  plannedWorkButton = 1
  private dialog = inject(MatDialog)
  openCareer(){
    this.dialog.open(CareerDialogComponent, {
      width: '740px',
      maxWidth: 'none',
      maxHeight: '720px', // To allow the dialog to grow based on content height
      height: '90vh' 
    })
  }
}
