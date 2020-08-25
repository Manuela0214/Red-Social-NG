import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaImagesComponent } from './consola-images.component';

describe('ConsolaImagesComponent', () => {
  let component: ConsolaImagesComponent;
  let fixture: ComponentFixture<ConsolaImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolaImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
