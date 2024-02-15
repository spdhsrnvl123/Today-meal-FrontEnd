import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SearchListComponent} from "../../components/search-list/search-list.component";
import {KakaoMapApiService} from "../kakao-map-api/kakao-map-api.service";
import {Subscription} from "rxjs";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";

declare var kakao: any;
@Component({
  selector: 'app-kakao-api',
  templateUrl: './kakao-api.component.html',
  styleUrls: ['./kakao-api.component.css'],
})
export class KakaoAPIComponent implements OnInit {
  private dataStatusSubscription : Subscription
  constructor(
    private kakaoMapApiService : KakaoMapApiService,
    ) {
    this.dataStatusSubscription = new Subscription();
  }
  mapContainer: any;
  mapOption: any;
  map: any = '';
  markers = [];

  ngOnInit() {
    //지도 표시
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
     };

    this.mapContainer = mapContainer;
    this.mapOption = mapOption;

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      this.map = new kakao.maps.Map(mapContainer, mapOption);

    this.dataStatusSubscription = this.kakaoMapApiService.dataStatusSubject.subscribe((newData)=>{
      this.displayPlaces(newData)
    })
  }


  displayPlaces(places: any[]) {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
      };

    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    // -------------------------------------------------------------------------------

    let bounds = new kakao.maps.LatLngBounds()
    let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
    // 마커 이미지의 이미지 크기 입니다
    let imageSize = new kakao.maps.Size(36, 37);
    // let imgOptions =  {
    //     spriteSize : newㅏㅑ   kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
    //     spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
    //     offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    // }
    // let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);

    places.forEach((place,idx) => {
      // 인포 윈도우 생성
      let iwContent = `<div style="padding:5px;">(${idx+1}) ${place.place_name}</div>` // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      let iwPosition = new kakao.maps.LatLng(place.y, place.x); //인포윈도우 표시 위치입니다

      let infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      console.log(place);
      let imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
        spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      };
      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imgOptions
      );
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(place.y, place.x), // 마커를 표시할 위치
        // title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);
    });
    map.setCenter(new kakao.maps.LatLng(places[0].y, places[0].x));

  }

}
