import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {SearchListComponent} from "../../components/search-list/search-list.component";

declare var kakao: any;
@Component({
  selector: 'app-kakao-api',
  templateUrl: './kakao-api.component.html',
  styleUrls: ['./kakao-api.component.css'],
})
export class KakaoAPIComponent implements OnInit {
  mapContainer: any;
  mapOption: any;
  map: any;

  ngOnInit() {
    //초기
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
     };

    this.mapContainer = mapContainer;
    this.mapOption = mapOption;

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    this.map = new kakao.maps.Map(mapContainer, mapOption);
  }
}
