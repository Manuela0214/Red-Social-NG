import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoEditionComponent } from './videojuego-edition.component';

describe('VideojuegoEditionComponent', () => {
  let component: VideojuegoEditionComponent;
  let fixture: ComponentFixture<VideojuegoEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
