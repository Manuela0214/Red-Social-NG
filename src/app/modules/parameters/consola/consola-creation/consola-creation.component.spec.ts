import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaCreationComponent } from './consola-creation.component';

describe('ConsolaCreationComponent', () => {
  let component: ConsolaCreationComponent;
  let fixture: ComponentFixture<ConsolaCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolaCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
