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
  locationChangeInfo : any = false;
  currentTime : any = 'Loading...'
  date : any;
  voteStatus :any = true;

  //초기 등록된 장소 조회
  ngOnInit() {
    this.startTimer()
  }

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
    this.locationChangeInfo = false;
    console.log(this.locationChangeInfo)
  }

  modalVoteCancelOpen(status : any){
    this.modalContent = 'modalVoteCancel'
    this.status = status;
  }

  startTimer(){
    setInterval(()=>{
      this.updateCurrentTime();
    },1000)
  }

  updateCurrentTime(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());
    const seconds = this.padZero(now.getSeconds());

    this.currentTime = `${hours}:${minutes}:${seconds}`;
    this.date = `${year}.${month}.${date}`;
  }

  padZero(num: number) {
    return num < 10 ? '0' + num : num;
  }

  voteStatusHandler(voteStatus:boolean){
    console.log(voteStatus);
    this.voteStatus = voteStatus
  }
}
