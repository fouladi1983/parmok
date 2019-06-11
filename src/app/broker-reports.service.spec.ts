import { TestBed } from '@angular/core/testing';

import { BrokerReportsService } from './broker-reports.service';

describe('BrokerReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrokerReportsService = TestBed.get(BrokerReportsService);
    expect(service).toBeTruthy();
  });
});
