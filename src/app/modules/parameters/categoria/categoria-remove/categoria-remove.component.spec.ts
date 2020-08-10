import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaRemoveComponent } from './categoria-remove.component';

describe('CategoriaRemoveComponent', () => {
  let component: CategoriaRemoveComponent;
  let fixture: ComponentFixture<CategoriaRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
