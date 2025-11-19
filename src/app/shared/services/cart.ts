import { Injectable } from '@angular/core';
import { IProduct, ISelectedProperty } from '../interfaces/iproduct';
import { ICart } from '../interfaces/icart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart$ = new BehaviorSubject<ICart>({ total: 0, items: [] });
  add(
    product: IProduct,
    quantity: number,
    customization?: ISelectedProperty[]
  ) {
    const newTotal = this.cart$.value.total + product.price * quantity;

    this.cart$.next({
      total: newTotal,
      items: [
        ...this.cart$.value.items,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          ...(product.customization?.textureFile && {
            textureFile: product.customization.textureFile,
          }),
          image: product.image,
          quantity: quantity,
          ...(customization && { customization }),
        },
      ],
    });
  }

  remove(idx: number) {
    const item = this.cart$.value.items.find((item, index) => index === idx)!;
    const newTotal = this.cart$.value.total - item?.price * item?.quantity;

    this.cart$.next({
      total: newTotal,
      items: this.cart$.value.items.filter((item, index) => index !== idx),
    });
  }
  clear() {
    this.cart$.next({ total: 0, items: [] });
  }
}
