import { TestBed } from '@angular/core/testing';

import { KakaoMapApiService } from './kakao-map-api.service';

describe('KakaoMapApiService', () => {
  let service: KakaoMapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KakaoMapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
