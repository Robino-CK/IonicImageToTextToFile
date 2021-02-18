import { TestBed } from '@angular/core/testing';

import { Tap1MobileService } from './tap1-mobile.service';

describe('Tap1MobileService', () => {
  let service: Tap1MobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tap1MobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
