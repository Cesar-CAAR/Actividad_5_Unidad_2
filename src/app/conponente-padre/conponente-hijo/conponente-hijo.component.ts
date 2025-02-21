import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-conponente-hijo',
  imports: [RouterOutlet, ConponenteHijoComponent],
  templateUrl: './conponente-hijo.component.html',
  styleUrl: './conponente-hijo.component.css'
})


export class ConponenteHijoComponent {
  componenteHijo = 'Este texto probiene del conponente hijo';
}
