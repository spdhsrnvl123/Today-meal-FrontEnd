import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit, AfterViewInit {
  constructor(private apiService: ApiService, private router: Router) {}
  data: any = [];
  status: any;
  id :any;
  modalContent : any;

  //초기 등록된 장소 조회
  ngOnInit() {}

  ngAfterViewInit() {
    this.locationGetDataHandler();
  }

  //등록된 장소 조회
  locationGetDataHandler() {
    this.apiService.locationGetData().subscribe((data) => {
      this.data = data;
    });
  }

  //투표 장소 상세보기 모달 열기
  modalRepresetReq(status: any) {
    this.status = status;
    this.modalContent = "modalDetail"
  }

  //리뷰 등록 모달 열기
  reviewRegisterModal(status : any){
    this.status = status;
    this.modalContent = "modalReviewRegister"
  }

  //카드 컴포넌트에서 id값 받기
  idRes(id:any){
    console.log(id)
    if(id){
      this.id = id;
    }
  }

  //모달에서 닫기 버튼을 했을때 상태값 받아오기
  closeHandler(status: any) {
    this.status = status;
  }

}
