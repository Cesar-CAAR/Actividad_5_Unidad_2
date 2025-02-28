import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-replicador-dos',
  imports: [FormsModule],
  templateUrl: './replicador-dos.component.html',
  styleUrl: './replicador-dos.component.css'
})
export class SaludarComponent {
saludo='Saludo inicial';
}
