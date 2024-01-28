import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KakaoFormComponent } from './kakao-form.component';

describe('KakaoFormComponent', () => {
  let component: KakaoFormComponent;
  let fixture: ComponentFixture<KakaoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KakaoFormComponent]
    });
    fixture = TestBed.createComponent(KakaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
