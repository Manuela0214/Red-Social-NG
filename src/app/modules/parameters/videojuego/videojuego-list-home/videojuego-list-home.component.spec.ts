import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoListHomeComponent } from './videojuego-list-home.component';

describe('VideojuegoListHomeComponent', () => {
  let component: VideojuegoListHomeComponent;
  let fixture: ComponentFixture<VideojuegoListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
