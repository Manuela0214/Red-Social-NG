import { TestBed } from '@angular/core/testing';

import { ConsolaService } from './consola.service';

describe('ConsolaService', () => {
  let service: ConsolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
