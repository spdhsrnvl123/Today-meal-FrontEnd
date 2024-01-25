import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SearchListComponent} from "../../components/search-list/search-list.component";

declare var kakao: any;
@Component({
  selector: 'app-kakao-api',
  templateUrl: './kakao-api.component.html',
  styleUrls: ['./kakao-api.component.css']
})
export class KakaoAPIComponent implements OnInit, AfterViewInit{
  markers :any = [];

  // mapContainer = document.getElementById('map_two') // 지도를 표시할 div

  @ViewChild('myDiv') myDiv : ElementRef | undefined;
  mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
  };

  a : any;
  b : any;

  map : any;
  ngAfterViewInit() {
    // console.log(this.myDiv?.nativeElement)
    // console.log(this.a);
    // console.log(this.b);

    // console.log(this.map)

  }
  real(){
    // console.log(1)
  }


  ngOnInit() {
    //초기
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };
    // console.log(mapOption)

    this.a = mapContainer;
    this.b = mapOption;

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    // var map = new kakao.maps.Map(mapContainer, mapOption);
    // console.log(map)

    this.map = new kakao.maps.Map(mapContainer, mapOption);
  }

// 장소 검색 객체를 생성합니다
  ps = new kakao.maps.services.Places();

  // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
  infowindow = new kakao.maps.InfoWindow({zIndex:1});



  // @ts-ignore
  searchPlaces(f: NgForm) {
    var ps = new kakao.maps.services.Places();
    console.log(ps)
    // console.log(f.value.title)
    let title = f.value.title;`anga`
    if (!title.replace(/^\s+|\s+$/g, '')) {
      alert('키워드를 입력해주세요!');
      return false;
    }

    console.log(title)
    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(title, this.placesSearchCB);
  }

  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  placesSearchCB = (data:any, status:any, pagination:any) => {
    if (status === kakao.maps.services.Status.OK) {

      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      console.log(data,status,pagination)
      this.displayPlaces(data);
      // console.log(1)
      this.real();

      // 페이지 번호를 표출합니다
      // this.displayPagination(pagination);

    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

      alert('검색 결과가 존재하지 않습니다.');
      return;
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
      return;
    }
  }



  // ----------------------------------------------------------------------------------------
  // 검색 결과 목록과 마커를 표출하는 함수입니다

  //배열형태로 만듬
  place : any = [];
  displayPlaces(places:any) {

    console.log(places)

    this.place = places

    var listEl:any = document.getElementById('placesList'),
      menuEl :any = document.getElementById('menu_wrap'),
      fragment = document.createDocumentFragment(),
      bounds = new kakao.maps.LatLngBounds(),
      listStr = '';

    console.log(listEl)
    let real = listEl.querySelector(".info");

    // 검색 결과 목록에 추가된 항목들을 제거합니다
    this.removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    this.removeMarker();


    for ( var i=0; i<places.length; i++ ) {
      // console.log(places[i]);

      // 마커를 생성하고 지도에 표시합니다
      var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
        marker = this.addMarker(placePosition, i),
        itemEl = this.getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

      let obj = places[i];
      // console.log(obj)

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(placePosition);
      // fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    this.map.setBounds(bounds);
  }
  // ----------------------------------------------------------------------------------------
  // 검색결과 항목을 Element로 반환하는 함수입니다

  data : any;
  getListItem(index:any, places:any) {

    this.data = places;

    // var el = document.createElement('li'),
    //   itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
    //     '<div class="info">' +
    //     '   <h5>' + places.place_name + '</h5>';
    //
    // if (places.road_address_name) {
    //   itemStr += '    <span>' + places.road_address_name + '</span>' +
    //     '   <span class="jibun gray">' +  places.address_name  + '</span>';
    // } else {
    //   itemStr += '    <span>' +  places.address_name  + '</span>';
    // }
    //
    // itemStr += '  <span class="tel">' + places.phone  + '</span>' +
    //   '</div>';
    // itemStr += '<button type="button" class="register">등록</button>'
    //
    // // let buttonElement = el.nativeElement.querySelector('.register');
    //
    // el.innerHTML = itemStr;
    // el.className = 'item';
    // console.log(el)
    // console.log(el.lastChild)
    //
    // //id값 셋팅
    // // @ts-ignore
    // el.lastChild.id = places.id;
    //
    // // @ts-ignore
    // el.lastChild.addEventListener("click",this.register())

    // return el;

  }

  register(){
    console.log(123)
  }

  // ------------------------------------------------------------------
  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  addMarker(position:any, idx:any) {
    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
      imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
      imgOptions =  {
        spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
        spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      },
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
      marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage
      });

    marker.setMap(this.map); // 지도 위에 마커를 표출합니다
    this.markers.push(marker);  // 배열에 생성된 마커를 추가합니다

    return marker;
  }

  // ------------------------------------------------------------------

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
  removeMarker() {

    for ( var i = 0; i < this.markers.length; i++ ) {
      this.markers[i].setMap(null);
    }
    this.markers = [];

  }

  // ------------------------------------------------------------------

  // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
  displayPagination(pagination:any) {
    var paginationEl :any = document.getElementById('pagination'),
      fragment = document.createDocumentFragment(),
      i;

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
      paginationEl.removeChild (paginationEl.lastChild);
    }

    for (i=1; i<=pagination.last; i++) {
      var el :any = document.createElement('a');
      el.href = "#";
      el.innerHTML = i;

      if (i===pagination.current) {
        el.className = 'on';
      } else {
        el.onclick = (function(i) {
          return function() {
            pagination.gotoPage(i);
          }
        })(i);
      }

      fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
  }


  //-------------------------------------------------------------------
  // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
  // 인포윈도우에 장소명을 표시합니다
  // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
  // 인포윈도우에 장소명을 표시합니다
  displayInfowindow(marker:any, title:any, obj:any) {
    console.log(title)
    var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
    // console.log(title)
    this.infowindow.setContent(content);
    this.infowindow.open(this.map, marker);
  }

  removeAllChildNods(el : any) {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  }

}
