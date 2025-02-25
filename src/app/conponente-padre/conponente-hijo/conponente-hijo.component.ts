import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-conponente-hijo',
  imports: [RouterOutlet, ConponenteHijoComponent],
  templateUrl: './conponente-hijo.component.html',
  styleUrl: './conponente-hijo.component.css'
})


export class ConponenteHijoComponent {
  private titulo = "Orgullo UTS";


  // Metodo para mostrar el titulo en TypeScript
  // cuando la variable es privada
  get mostrarTitulo(): string {
    return this.titulo;
  }


  // Metodo para mostrar el titulo en JavaScript
  // cuando la variable es privada
  getTitulo(): string {
    return this.titulo;
  }
}
