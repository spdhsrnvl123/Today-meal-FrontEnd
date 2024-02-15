import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: 'register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  data: any = [];
  status: any;
  id: any;
  loadingData: any = [];
  voteButtonDel = 'voteButtonDel';
  delItemModalAction ='';
  delId : any;

  //초기 등록된 장소 조회
  ngOnInit() {
    this.getData();
    this.loadingLocation();
  }

  //등록된 장소 조회
  getData() {
    this.apiService.locationGetData().subscribe((data) => {
      this.data = data;
    });
  }

  // 삭제 대기 장소 조회
  loadingLocation() {
    this.apiService.loadingLocation().subscribe((data) => {
      this.loadingData = data;
    });
  }

  //삭제대기 취소
  loadingCancel(id: any) {
    this.apiService.loadingCancel(id).subscribe(() => {
      this.getData();
      this.loadingLocation();
    });
  }

  //모달 열기
  modalRepresetReq(status: any) {
    this.status = status;
  }

  //카드 컴포넌트에서 id값 받기
  idRes(id: any) {
    console.log(id);
    if (id) {
      this.id = id;
    }
  }

  //모달에서 닫기 버튼을 했을때 상태값 받아오기
  closeHandler(status: any) {
    console.log(status)
    this.status = status;
    this.delItemModalAction = '';
  }

  locationDelId(id:any){
    console.log(id);
    this.delId = id;
  }

  locationDel() {
    this.apiService.locationDeleteData(this.delId).subscribe(() => {
      this.getData();
      this.loadingLocation();
      this.delItemModalAction = '';
    });
  }
  delItemModalActionHandler(delItemModalAction:any) {
    this.delItemModalAction = delItemModalAction;
    console.log(this.delItemModalAction)
  }
}
