import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoListDetailsComponent } from './videojuego-list-details.component';

describe('VideojuegoListDetailsComponent', () => {
  let component: VideojuegoListDetailsComponent;
  let fixture: ComponentFixture<VideojuegoListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
