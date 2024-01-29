import { Component, EventEmitter, Input, Output } from '@angular/core';

declare let kakao: any;
@Component({
  selector: 'app-kakao-form',
  templateUrl: './kakao-form.component.html',
  styleUrls: ['./kakao-form.component.css'],
})
export class KakaoFormComponent {
  markers: any = [];
  data: any;

  // 장소 검색 객체를 생성합니다
  ps = new kakao.maps.services.Places();
  // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
  infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  // @ts-ignore
  searchPlaces(f: NgForm) {
    let ps = new kakao.maps.services.Places();
    let title = f.value.title;
    `anga`;
    if (!title.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return false;
    }
    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(title, this.placesSearchCB);
  }

  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  placesSearchCB = (data: any, status: any, pagination: any) => {
    if (status === kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      this.displayPlaces(data);

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

  //배열형태로 만듬
  place: any = [];
  displayPlaces(places: any) {
    this.place = places;

    let listEl: any = document.getElementById('placesList'),
      menuEl: any = document.getElementById('menu_wrap'),
      fragment = document.createDocumentFragment(),
      bounds = new kakao.maps.LatLngBounds()

    for (let i = 0; i < places.length; i++) {
      // 마커를 생성하고 지도에 표시합니다
      let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
        itemEl = this.getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(placePosition);
      // fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;
  }

  // 검색결과 항목을 Element로 반환하는 함수입니다
  getListItem(index: any, places: any) {
    this.data = places;
  }
}
