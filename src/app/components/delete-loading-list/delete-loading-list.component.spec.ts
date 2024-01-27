import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLoadingListComponent } from './delete-loading-list.component';

describe('DeleteLoadingListComponent', () => {
  let component: DeleteLoadingListComponent;
  let fixture: ComponentFixture<DeleteLoadingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteLoadingListComponent]
    });
    fixture = TestBed.createComponent(DeleteLoadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
