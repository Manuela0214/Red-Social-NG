import { TestBed } from '@angular/core/testing';

import { VideojuegoImagesService } from './videojuego-images.service';

describe('VideojuegoImagesService', () => {
  let service: VideojuegoImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideojuegoImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
