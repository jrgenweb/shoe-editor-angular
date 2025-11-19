import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCustomization } from './product-customization';

describe('ProductCustomization', () => {
  let component: ProductCustomization;
  let fixture: ComponentFixture<ProductCustomization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCustomization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCustomization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
