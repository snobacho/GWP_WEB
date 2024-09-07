import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRowComponent } from './dialogs/add-row/add-row.component';
import { ChvenebaComponent } from './dialogs/chveneba/chveneba.component';
import { ProblemComponent } from './dialogs/problem/problem.component';
import { DetailsComponent } from './dialogs/details/details.component';

@Component({
  selector: 'app-cabinet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabinet.component.html',
  styleUrl: './cabinet.component.css'
})
export class CabinetComponent {
  openedTab = 1
  checkForPayment = false
  isExpanded1: boolean = false; 
  isExpanded2: boolean = false; 
  problemAdded = false
  private dialog = inject(MatDialog)
  openRowPopup(){
    const dialog = this.dialog.open(AddRowComponent, {
      width: '450px'
    })
  }

  openChvenebaPopup(): void {
    const dialog = this.dialog.open(ChvenebaComponent, {
      width: '450px'
    })
  }

  openProblemPopup(): void {
    const dialog = this.dialog.open(ProblemComponent, {
      width: '780px',
      maxWidth: '90vw',
      maxHeight: '90vh',    
    })
    dialog.componentInstance.addProblem.subscribe((value: boolean) => {
      this.problemAdded = value
    })
  }

  openDetailsPopup(){
    const dialog = this.dialog.open(DetailsComponent, {
      width: '920px',
      maxWidth: '90vw',
      maxHeight: '90vh',    
    })
  
  }
}
