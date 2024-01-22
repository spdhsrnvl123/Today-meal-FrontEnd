import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KakaoAPIComponent } from './kakao-api.component';

describe('KakaoAPIComponent', () => {
  let component: KakaoAPIComponent;
  let fixture: ComponentFixture<KakaoAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KakaoAPIComponent]
    });
    fixture = TestBed.createComponent(KakaoAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
