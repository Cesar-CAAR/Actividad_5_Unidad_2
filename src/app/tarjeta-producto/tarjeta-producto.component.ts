import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConponentePadreComponent } from '../conponente-padre/conponente-padre.component';
import { ConponenteHijoComponent } from '../conponente-padre/conponente-hijo/conponente-hijo.component';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [RouterOutlet, ConponentePadreComponent, ConponenteHijoComponent],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})


export class TarjetaProductoComponent {
  nombre = 'Laptop Gamer';
  precio = 25000;
  descripcion = 'Una laptop potente para juegos y desarrollo.';
}
