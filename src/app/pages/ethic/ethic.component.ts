import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ethic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ethic.component.html',
  styleUrl: './ethic.component.css'
})
export class EthicComponent {
  ethicTab = 1
}
