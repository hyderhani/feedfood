import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientProductComponent } from './recipient-product.component';

describe('RecipientProductComponent', () => {
  let component: RecipientProductComponent;
  let fixture: ComponentFixture<RecipientProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
