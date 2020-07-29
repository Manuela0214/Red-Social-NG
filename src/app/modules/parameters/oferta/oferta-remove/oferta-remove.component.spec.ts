import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaRemoveComponent } from './oferta-remove.component';

describe('OfertaRemoveComponent', () => {
  let component: OfertaRemoveComponent;
  let fixture: ComponentFixture<OfertaRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
