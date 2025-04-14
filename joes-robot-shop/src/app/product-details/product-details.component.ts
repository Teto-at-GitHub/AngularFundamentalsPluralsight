import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }

  getDiscountedClasses(product: IProduct) {
    // console.log('LOG - getting discounted classes')
    if (product.discount > 0) return ['strikethrough'];
    return [];
  }

  getImageUrl(product: IProduct) {
    // console.log('LOG - getting the img urls')
    if (!product) return "";
    return '/assets/images/robot-parts/' + product.imageName;
  }

}
