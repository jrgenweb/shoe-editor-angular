import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCustom } from './products-custom';

describe('ProductsCustom', () => {
  let component: ProductsCustom;
  let fixture: ComponentFixture<ProductsCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCustom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCustom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
