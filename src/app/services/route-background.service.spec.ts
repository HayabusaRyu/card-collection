import { TestBed } from '@angular/core/testing';

import { RouteBackgroundService } from './route-background.service';

describe('RouteBackgroundService', () => {
  let service: RouteBackgroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteBackgroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
