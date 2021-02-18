import { TestBed } from '@angular/core/testing';

import { Tap1DesktopService } from './tap1-desktop.service';

describe('Tap1DesktopService', () => {
  let service: Tap1DesktopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tap1DesktopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
