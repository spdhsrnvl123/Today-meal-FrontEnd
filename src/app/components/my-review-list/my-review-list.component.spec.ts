import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReviewListComponent } from './my-review-list.component';

describe('MyReviewListComponent', () => {
  let component: MyReviewListComponent;
  let fixture: ComponentFixture<MyReviewListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyReviewListComponent]
    });
    fixture = TestBed.createComponent(MyReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
