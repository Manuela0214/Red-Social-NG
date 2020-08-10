import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VideojuegoCreationComponent } from './videojuego-creation.component';

describe('VideojuegoCreationComponent', () => {
  let component: VideojuegoCreationComponent;
  let fixture: ComponentFixture<VideojuegoCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
