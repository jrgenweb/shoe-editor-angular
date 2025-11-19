import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertySelect } from './custom-property-select';

describe('CustomPropertySelect', () => {
  let component: CustomPropertySelect;
  let fixture: ComponentFixture<CustomPropertySelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPropertySelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPropertySelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
