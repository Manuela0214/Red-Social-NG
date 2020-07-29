import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaRemoveComponent } from './consola-remove.component';

describe('ConsolaRemoveComponent', () => {
  let component: ConsolaRemoveComponent;
  let fixture: ComponentFixture<ConsolaRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolaRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
