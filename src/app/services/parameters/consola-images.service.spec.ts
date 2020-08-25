import { TestBed } from '@angular/core/testing';

import { ConsolaImagesService } from './consola-images.service';

describe('ConsolaImagesService', () => {
  let service: ConsolaImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsolaImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
