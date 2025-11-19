import { Component, OnInit } from '@angular/core';

import { CustomPropertySelect } from './custom-property-select/custom-property-select';
import { ProductCustomViewer } from '../../components/customer/product-custom-viewer/product-custom-viewer';
import {
  IProduct,
  IProperty,
  ISelectedProperty,
} from '../../shared/interfaces/iproduct';
import { Product } from '../../shared/services/product';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../../shared/services/cart';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-customization',
  imports: [ProductCustomViewer, CustomPropertySelect, FormsModule],
  templateUrl: './product-customization.html',
  styleUrl: './product-customization.scss',
})
export class ProductCustomization implements OnInit {
  properties: IProperty[] = [];
  selectedProperties: ISelectedProperty[] = [];
  product!: IProduct | undefined;

  quantity = 1;

  constructor(
    private productService: Product,
    private route: ActivatedRoute,
    private cartService: Cart
  ) {
    const productId = route.snapshot.paramMap.get('id');
    this.product = this.productService.getCustomizableById(Number(productId));
    this.properties = this.product?.customization?.properties || [];
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onChange(selectedProperties: ISelectedProperty[]) {
    this.selectedProperties = selectedProperties;
  }
  addToCart() {
    this.cartService.add(this.product!, this.quantity, this.selectedProperties);
  }
}
