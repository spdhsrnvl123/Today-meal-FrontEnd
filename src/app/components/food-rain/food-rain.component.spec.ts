import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRainComponent } from './food-rain.component';

describe('FoodRainComponent', () => {
  let component: FoodRainComponent;
  let fixture: ComponentFixture<FoodRainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodRainComponent]
    });
    fixture = TestBed.createComponent(FoodRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
