import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  standalone: false,
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  products: IProduct[] = [];
  filter: string = '';

  constructor(private cartService: CartService,
    private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe( products => {
      this.products = products;
    })
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }

  getFilteredProducts() {
    // console.log('LOG - Hitting the filter !')
    return this.filter === '' ?
      this.products :
      this.products.filter((product: any) => product.category === this.filter)
  }
}