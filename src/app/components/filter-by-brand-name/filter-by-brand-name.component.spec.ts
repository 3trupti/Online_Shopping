import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByBrandNameComponent } from './filter-by-brand-name.component';

describe('FilterByBrandNameComponent', () => {
  let component: FilterByBrandNameComponent;
  let fixture: ComponentFixture<FilterByBrandNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByBrandNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByBrandNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
