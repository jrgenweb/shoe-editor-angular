import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../shared/services/product';
import { AsyncPipe } from '@angular/common';
import { ShortenPipe } from '../../shared/pipes/shorten-pipe';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe, ShortenPipe, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  isCustomPage = false;
  constructor(private route: ActivatedRoute, public productService: Product) {
    this.route.url.subscribe((url) => {
      this.isCustomPage = url[1] ? true : false;
    });

    if (this.isCustomPage) {
      this.productService.getAllCustomizable();
    } else {
      this.productService.getAll();
    }
  }
}
