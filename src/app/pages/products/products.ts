import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../shared/services/product';
import { AsyncPipe } from '@angular/common';
import { ShortenPipe } from '../../shared/pipes/shorten-pipe';
import { IProduct } from '../../shared/interfaces/iproduct';
import { Cart } from '../../shared/services/cart';
import { HufPipe } from '../../shared/pipes/huf-pipe';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe, ShortenPipe, RouterLink, HufPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  constructor(
    private route: ActivatedRoute,
    public productService: Product,
    private cartService: Cart
  ) {
    /*   this.route.url.subscribe((url) => {
  
    }); */

    this.productService.getAll();
  }
  addToCart(product: IProduct) {
    this.cartService.add(product, 1);
  }
}
