import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveproductsComponent } from './activeproducts.component';

describe('ActiveproductsComponent', () => {
  let component: ActiveproductsComponent;
  let fixture: ComponentFixture<ActiveproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
