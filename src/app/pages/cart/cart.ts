import { Component } from '@angular/core';
import { Cart as CartService } from '../../shared/services/cart';
import { AsyncPipe } from '@angular/common';
import { ProductCustomViewer } from '../../components/customer/product-custom-viewer/product-custom-viewer';
import { Color } from '../../components/customer/color/color';

@Component({
  selector: 'app-cart',
  imports: [AsyncPipe, ProductCustomViewer, Color],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  constructor(public cartService: CartService) {
    cartService.cart$.subscribe((c) => console.log(c));
  }

  removeItem(idx: number) {
    this.cartService.remove(idx);
  }
}
