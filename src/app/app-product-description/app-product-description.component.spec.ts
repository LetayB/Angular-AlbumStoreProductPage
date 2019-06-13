import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductDescriptionComponent } from './app-product-description.component';

describe('AppProductDescriptionComponent', () => {
  let component: AppProductDescriptionComponent;
  let fixture: ComponentFixture<AppProductDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
