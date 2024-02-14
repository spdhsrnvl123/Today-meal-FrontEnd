import { Component, EventEmitter, Input, Output } from '@angular/core';
import {KakaoMapApiService} from "../../services/kakao-map-api/kakao-map-api.service";

declare let kakao: any;
@Component({
  selector: 'app-kakao-form',
  templateUrl: './kakao-form.component.html',
  styleUrls: ['./kakao-form.component.css'],
})
export class KakaoFormComponent {
  constructor(private kakaoMapApiService : KakaoMapApiService) {
  }
  data: any;
  //배열형태로 만듬
  place: any = [];

  // 장소 검색 객체를 생성
  ps = new kakao.maps.services.Places();

  // @ts-ignore
  // 키워드 검색을 요청하는 함수
  searchPlaces(f: NgForm) {
    let ps = new kakao.maps.services.Places();
    let title = f.value.title;
    if (!title.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return false;
    }
    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(title, this.placesSearchCB);
  }

  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  placesSearchCB = (data: any, status: any) => {
    if (status === kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다

      this.place = data;
      this.kakaoMapApiService.setData(data);

      // 페이지 번호를 표출합니다
      // this.displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
      return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
      return;
    }
  };
}
