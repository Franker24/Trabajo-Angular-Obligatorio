import { FormComponent } from './form/form.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { product } from './types/types';
import { AsyncPipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,AsyncPipe,HomeComponent,DetalleComponent,FormComponent],
  template: `
  <div class="container">
@if (productsResult$ | async; as productList){
  <app-detalle/>
  <app-home [products]="productList"/>
  <br>
  <div id="horizontal-line"></div>
  <br>
  <app-form/>
}@else {
  <div class="loader"></div>
  <p class="loading-page">Loading...</p>

  }
  </div>
  <footer class="footer">
  <p>Contacta via : </p>
  <a href="https://www.instagram.com" target="_blank" class="social-icon">
    <i class="fab fa-instagram"></i> Instagram
  </a>
  <a href="https://www.facebook.com" target="_blank" class="social-icon">
    <i class="fab fa-facebook"></i> Facebook
  </a>
  <a href="https://wa.me/yourphonenumber" target="_blank" class="social-icon">
    <i class="fab fa-whatsapp"></i> WhatsApp
  </a>
  </footer>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
  public productsResult$!: Observable<product[]>

  constructor(private apiProduct: ProductService){}

  ngOnInit(): void {
    this.productsResult$ = this.apiProduct.getProducts()
  }
}
