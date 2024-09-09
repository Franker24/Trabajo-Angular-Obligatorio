import { RouterOutlet } from '@angular/router';
import { product } from '../types/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  @Input() products: product[] | null = [];
}
