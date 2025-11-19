import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCustomViewer } from './product-custom-viewer';

describe('ProductCustomViewer', () => {
  let component: ProductCustomViewer;
  let fixture: ComponentFixture<ProductCustomViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCustomViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCustomViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
