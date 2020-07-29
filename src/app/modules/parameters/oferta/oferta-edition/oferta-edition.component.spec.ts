import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaEditionComponent } from './oferta-edition.component';

describe('OfertaEditionComponent', () => {
  let component: OfertaEditionComponent;
  let fixture: ComponentFixture<OfertaEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
