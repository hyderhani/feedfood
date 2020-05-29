import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedusersComponent } from './savedusers.component';

describe('SavedusersComponent', () => {
  let component: SavedusersComponent;
  let fixture: ComponentFixture<SavedusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
