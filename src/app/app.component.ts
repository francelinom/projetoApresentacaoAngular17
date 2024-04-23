import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
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

  signalTeste = signal({nome: 'Francelino', idade: 30});

  executar() {
    // Set: Define o signal como um novo valor absoluto.
    // this.signalTeste.set(10);

    // Update: Define o signal com base no valor atual.
     this.signalTeste.update(atual => {
       return { ...atual, idade: 35 };
     });
  }
}
