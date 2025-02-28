import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-replicador',
  imports: [RouterOutlet],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})

export class ReplicadorComponent {
texto: String = '';

actualizarTexto(event: Event): void {
  const elementoInput = event.target as HTMLInputElement;
  this.texto = elementoInput.value;
}
}
