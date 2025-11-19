import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { BehaviorSubject, of } from 'rxjs';

// az alábbi formában jönnek le az adatok

const products: IProduct[] = [
  {
    id: 1,
    name: 'Nike cipő',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus accusamus enim eaque vero, numquam minima fuga id illo nulla, pariatur, laboriosam deserunt aliquid consectetur nam excepturi voluptatibus aperiam omnis quibusdam atque. Repellendus, unde culpa nesciunt non fugit libero tempore?',
    image: 'images/nike.png',
    price: 3000,
  },
  {
    id: 2,
    name: 'Nike cipő - testreszabható',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus accusamus enim eaque vero, numquam minima fuga id illo nulla, pariatur, laboriosam deserunt aliquid consectetur nam excepturi voluptatibus aperiam omnis quibusdam atque. Repellendus, unde culpa nesciunt non fugit libero tempore?',
    image: 'images/nike.png',
    price: 3000,
    customization: {
      textureFile: 'images/nike-overlay2.svg',
      properties: [
        {
          id: 1,
          title: 'Nyelv',
          pathId: 'tongue',
          colors: [
            { label: 'Sárga', value: 'yellow' },
            { label: 'Zöld', value: 'green' },
            { label: 'Lila', value: 'purple' },
          ],
        },
        {
          id: 1,
          title: 'Nyelv - embléma',
          pathId: 'tongue-emblem',
          colors: [
            { label: 'Sárga', value: 'yellow' },
            { label: 'Zöld', value: 'green' },
          ],
        },
        {
          id: 2,
          title: 'Fűző',
          pathId: 'lace',
          colors: [
            { label: 'Kék', value: 'blue' },
            { label: 'Zöld', value: 'green' },
          ],
        },
        {
          id: 3,
          title: 'Talp',
          pathId: 'foot',
          colors: [
            { label: 'Kék', value: 'blue' },
            { label: 'Fekete', value: 'black' },
            { label: 'Fehér', value: 'white' },
            { label: 'Zöld', value: 'green' },
          ],
        },
        {
          id: 3,
          title: 'Embléma',
          pathId: 'emblem',
          colors: [
            { label: 'Kék', value: 'blue' },
            { label: 'Zöld', value: 'green' },
          ],
        },
        {
          id: 3,
          title: 'Felsőrész',
          pathId: 'upper',
          colors: [
            { label: 'Kék', value: 'blue' },
            { label: 'Zöld', value: 'green' },
          ],
        },
        {
          id: 3,
          title: 'Felsőrész - 2',
          pathId: 'upper-2',
          colors: [
            { label: 'Kék', value: 'blue' },
            { label: 'Zöld', value: 'green' },
          ],
        },
      ],
    },
  },
];

@Injectable({
  providedIn: 'root',
})
export class Product {
  products$ = new BehaviorSubject<IProduct[]>([]);

  getAll() {
    this.products$.next(products.filter((product) => !product.customization));
    return this.products$;
  }
  getAllCustomizable() {
    this.products$.next(products.filter((product) => product.customization));
    return this.products$;
  }

  getById(id: number) {
    return products.find((product) => product.id === id);
  }
  getCustomizableById(id: number) {
    return products.find(
      (product) => product.id === id && product.customization
    );
  }
}
