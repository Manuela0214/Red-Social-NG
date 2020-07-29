import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegoListComponent } from './videojuego-list.component';

describe('VideojuegoListComponent', () => {
  let component: VideojuegoListComponent;
  let fixture: ComponentFixture<VideojuegoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
