import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
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

  signalTeste = signal(1);
  mostrarContador = signal(true);

  /**
   * Computer signals são criados em base de outros signals.
   * O computedTeste também é uma dependencia do mostrarContador e quando o mostrarContador
   * for false o signal vai notificar
   * e o computedTeste não é acionado porque o signalTeste deixou de ser uma dependencia
   */
  computedTeste = computed(() => {
    console.log('computedTeste');
    if (this.mostrarContador()) {
      return `${this.signalTeste()} computed`;
    } else {
      return 'NADA!!!';
    }
  });

  executar() {
    // Set: Define o signal como um novo valor absoluto.
    // this.signalTeste.set(10);

    // Update: Define o signal com base no valor atual.
    // this.signalTeste.update(atual => {
    //   return { ...atual, idade: 35 };
    // });

    this.signalTeste.update(atual => atual + 1);
  }

  funcaoTeste() {
    return console.log('funcaoTeste');
  }

  alterar() {
    this.mostrarContador.update(atual => !atual);
  }
}
