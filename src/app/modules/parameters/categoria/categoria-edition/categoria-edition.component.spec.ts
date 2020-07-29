import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaEditionComponent } from './categoria-edition.component';

describe('CategoriaEditionComponent', () => {
  let component: CategoriaEditionComponent;
  let fixture: ComponentFixture<CategoriaEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
