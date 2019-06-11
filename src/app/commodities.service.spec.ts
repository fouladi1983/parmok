import { TestBed } from '@angular/core/testing';

import { CommoditiesService } from './commodities.service';

describe('CommoditiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommoditiesService = TestBed.get(CommoditiesService);
    expect(service).toBeTruthy();
  });
});
