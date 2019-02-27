import { TestBed } from '@angular/core/testing';

import { LeaveHistoryapiService } from './leavehistory.service';

describe('LeaveHistoryapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeaveHistoryapiService = TestBed.get(LeaveHistoryapiService);
    expect(service).toBeTruthy();
  });
});
