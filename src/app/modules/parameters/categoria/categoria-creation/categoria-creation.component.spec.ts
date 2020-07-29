import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCreationComponent } from './categoria-creation.component';

describe('CategoriaCreationComponent', () => {
  let component: CategoriaCreationComponent;
  let fixture: ComponentFixture<CategoriaCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
