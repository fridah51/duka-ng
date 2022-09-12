import { TestBed } from '@angular/core/testing';

import { VsgGuard } from './vsg.guard';

describe('VsgGuard', () => {
  let guard: VsgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VsgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
