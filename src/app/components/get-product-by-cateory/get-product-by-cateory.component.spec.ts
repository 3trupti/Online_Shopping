import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductByCateoryComponent } from './get-product-by-cateory.component';

describe('GetProductByCateoryComponent', () => {
  let component: GetProductByCateoryComponent;
  let fixture: ComponentFixture<GetProductByCateoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProductByCateoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductByCateoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
