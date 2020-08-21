import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserBookComponent } from './update-user-book.component';

describe('UpdateUserBookComponent', () => {
  let component: UpdateUserBookComponent;
  let fixture: ComponentFixture<UpdateUserBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
