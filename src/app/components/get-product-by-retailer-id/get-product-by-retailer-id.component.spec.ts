import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductByRetailerIDComponent } from './get-product-by-retailer-id.component';

describe('GetProductByRetailerIDComponent', () => {
  let component: GetProductByRetailerIDComponent;
  let fixture: ComponentFixture<GetProductByRetailerIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductByRetailerIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductByRetailerIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
