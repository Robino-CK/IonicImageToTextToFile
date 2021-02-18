import { TestBed } from '@angular/core/testing';

import { PhotoDesktopService } from './photo-desktop.service';

describe('PhotoDesktopService', () => {
  let service: PhotoDesktopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoDesktopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
