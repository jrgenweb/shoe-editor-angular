import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../shared/services/product';
import { AsyncPipe } from '@angular/common';
import { ShortenPipe } from '../../shared/pipes/shorten-pipe';

@Component({
  selector: 'app-products-custom',
  imports: [AsyncPipe, ShortenPipe, RouterLink],
  templateUrl: './products-custom.html',
  styleUrl: './products-custom.scss',
})
export class ProductsCustom {
  constructor(private route: ActivatedRoute, public productService: Product) {
    /* this.route.url.subscribe((url) => {
    
    }); */

    this.productService.getAllCustomizable();
  }
}
