import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaCreationComponent } from './oferta-creation.component';

describe('OfertaCreationComponent', () => {
  let component: OfertaCreationComponent;
  let fixture: ComponentFixture<OfertaCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
