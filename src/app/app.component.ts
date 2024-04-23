import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrutaComponent } from './fruta/fruta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FrutaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isTrue = true;
  usuarioLogado = 'Cliente';
  listaDeFrustas = ['Uva', 'Banana', 'Laranja'];
}
