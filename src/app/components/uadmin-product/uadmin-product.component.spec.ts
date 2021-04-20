import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UAdminProductComponent } from './uadmin-product.component';

describe('UAdminProductComponent', () => {
  let component: UAdminProductComponent;
  let fixture: ComponentFixture<UAdminProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UAdminProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UAdminProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
