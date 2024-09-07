import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MessagesComponent } from '../../pages/cabinet/dialogs/messages/messages.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpened = false
  loggedIn = true
  private dialog = inject(MatDialog)
  openMessages(){
    console.log(2);
    
    this.dialog.open(MessagesComponent)
  }
}
