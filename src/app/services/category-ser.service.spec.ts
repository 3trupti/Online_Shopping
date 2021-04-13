import { TestBed } from '@angular/core/testing';

import { CategorySerService } from './category-ser.service';

describe('CategorySerService', () => {
  let service: CategorySerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
