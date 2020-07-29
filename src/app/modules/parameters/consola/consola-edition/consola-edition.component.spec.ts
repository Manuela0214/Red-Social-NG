import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaEditionComponent } from './consola-edition.component';

describe('ConsolaEditionComponent', () => {
  let component: ConsolaEditionComponent;
  let fixture: ComponentFixture<ConsolaEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolaEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
