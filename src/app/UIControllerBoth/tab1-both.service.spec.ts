import { TestBed } from '@angular/core/testing';

import { Tab1BothService } from './tab1-both.service';

describe('Tab1BothService', () => {
  let service: Tab1BothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tab1BothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
