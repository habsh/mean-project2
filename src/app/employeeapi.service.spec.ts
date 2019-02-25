import { TestBed } from '@angular/core/testing';

import { EmployeeapiService } from './employeeapi.service';

describe('EmployeeapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeapiService = TestBed.get(EmployeeapiService);
    expect(service).toBeTruthy();
  });
});
