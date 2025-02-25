import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarjetaProductoComponent , MostrarMensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
    titulo= 'Orgullo UTS';
    usuario={
    firstName: "César Andres",
    lastName: "Alvarez Romero",
    edad:20,
    descripcion: "Me gusta la programación y me cuesta programar"
  };

  saludar(){
    return `Hola, ${this.usuario.firstName} ${this.usuario.lastName} con la edad de ${this.usuario.edad} años`;
  }
}
