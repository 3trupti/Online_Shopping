import { TestBed } from '@angular/core/testing';

import { AdminInfoServiceService } from './admin-info-service.service';

describe('AdminInfoServiceService', () => {
  let service: AdminInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
