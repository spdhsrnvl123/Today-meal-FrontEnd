import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRain2Component } from './food-rain2.component';

describe('FoodRain2Component', () => {
  let component: FoodRain2Component;
  let fixture: ComponentFixture<FoodRain2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodRain2Component]
    });
    fixture = TestBed.createComponent(FoodRain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
