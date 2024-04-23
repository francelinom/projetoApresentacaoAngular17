import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-fruta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruta.component.html',
  styleUrl: './fruta.component.scss'
})
export class FrutaComponent {

  @Input() disabled = false;

  @Input({transform: booleanAttribute}) disabledAngular17 = false;
}
