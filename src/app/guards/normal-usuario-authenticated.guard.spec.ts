import { TestBed } from '@angular/core/testing';

import { NormalUsuarioAuthenticatedGuard } from './normal-usuario-authenticated.guard';

describe('NormalUsuarioAuthenticatedGuard', () => {
  let guard: NormalUsuarioAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NormalUsuarioAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
