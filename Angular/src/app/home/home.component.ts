import { product } from './../types/types';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <div class="container">
    <table class="table">
    <caption class="contact-form">Lista y Detalle de los Productos
    </caption>
    <thead>
      <br>
      <tr>
        <th scope="col">#</th>
        <br>
        <th scope="col">Name</th>
        <br>
        <th scope="col">Price</th>
        <br>
        <th scope="col">Country of origin</th>
        </tr>
      </thead>
      <tbody>
        @for(product of products; track product.id; let i = $index) {
          <tr>
              <td>{{i + 1}}</td>
              <br>
              <td>{{product.name}}</td>
              <br>
              <td>{{product.price}}</td>
              <br>
              <td>{{product.country}}</td>
          </tr>
        }
      </tbody>
      </table>
  </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
   @Input() products: product[] | null = [];

}
