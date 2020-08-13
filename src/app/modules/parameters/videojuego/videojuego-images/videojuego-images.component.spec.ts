import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoImagesComponent } from './videojuego-images.component';

describe('VideojuegoImagesComponent', () => {
  let component: VideojuegoImagesComponent;
  let fixture: ComponentFixture<VideojuegoImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
