import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ConponenteHijoComponent} from './conponente-hijo/conponente-hijo.component';


@Component({
  selector: 'app-conponente-padre',
  imports: [RouterOutlet, ConponenteHijoComponent],
  templateUrl: './conponente-padre.component.html',
  styleUrl: './conponente-padre.component.css'
})


export class ConponentePadreComponent {
  componentePadre = 'Este texto probiene del conponente padre';
}
