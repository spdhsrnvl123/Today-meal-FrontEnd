import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankTopComponent } from './rank-top.component';

describe('RankTopComponent', () => {
  let component: RankTopComponent;
  let fixture: ComponentFixture<RankTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RankTopComponent]
    });
    fixture = TestBed.createComponent(RankTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
