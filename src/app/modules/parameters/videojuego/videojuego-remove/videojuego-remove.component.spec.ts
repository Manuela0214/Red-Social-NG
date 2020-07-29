import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoRemoveComponent } from './videojuego-remove.component';

describe('VideojuegoRemoveComponent', () => {
  let component: VideojuegoRemoveComponent;
  let fixture: ComponentFixture<VideojuegoRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
