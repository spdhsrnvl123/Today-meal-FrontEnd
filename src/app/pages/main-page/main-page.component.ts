import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
  voteStatus :any; // 투표진행중 유무
  reviewCardId : any;
  myVoteId :any;
  myVoteLocationData :any; //세션에서 투표한 장소 id값과 전체데이터값에서 일치하는 데이터를 추출한 값
  myVoteStatus : any; //투표 유무

  //초기 등록된 장소 조회
  ngOnInit() {
    console.log(this.myVoteStatus)
    this.startTimer()
    if(sessionStorage.getItem('voteLocation')){
      this.myVoteStatus = true;
      // this.voteItemId = sessionStorage.getItem('voteLocation')
      console.log(sessionStorage.getItem('voteLocation'));
    }
  }

  ngAfterViewInit() {
    this.locationGetDataHandler();
  }


  //등록된 장소 조회
  locationGetDataHandler(id?:any) {
    this.apiService.locationGetData().subscribe((data) => {
      this.data = data;

      let item = this.data?.filter((data :any)=>{
        return data.id == sessionStorage.getItem('voteLocation');
      })
      this.myVoteLocationData = item[0];

      //내가 투표한 장소에 식당을 표시하기 위해서 세션스토리지에 저장되어있는 id값으로 서버에서 받아온 데이터 id값을 비교
      if(id){
        let item = this.data?.filter((data :any)=>{
          return data.id == id
        })
        this.myVoteLocationData = item[0];
        console.log(this.myVoteLocationData)
      }
    });
  }

  myVoteLocationDetailHander(id:any){
    this.id = id;
    this.status = true;
    this.modalContent = "modalDetail"
  }

  //투표 장소 상세보기 모달 열기
  modalRepresetReq(status: any) {
    this.status = status;
    this.modalContent = "modalDetail"
  }

  //리뷰 등록 모달 열기
  reviewRegisterModal(reviewCardInfo : any){
    // this.status = status;
    console.log(reviewCardInfo);
    this.status = reviewCardInfo.status;
    this.reviewCardId = reviewCardInfo.id;
    this.modalContent = "modalReviewRegister";
  }

  //카드 컴포넌트에서 id값 받기
  idRes(id:any){
    console.log(id)
    if(id){
      this.id = id;
      this.locationGetDataHandler();
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

  //실시간 타이머 로직
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

    // @ts-ignore
    if (hours >= 9 && hours < 22) {
      this.voteStatus = true;
    } else {
      this.voteStatus = false;
    }
  }

  // 0:0:0을 방지 -> 00:00:00 표현 함수
  padZero(num: number) {
    return num < 10 ? '0' + num : num;
  }

  //투표 상황
  voteStatusHandler(voteStatus:boolean){
    console.log(voteStatus);
    this.voteStatus = voteStatus
  }

  voteCancel(){
    sessionStorage.removeItem('voteLocation');
    this.status = false; //모달창 닫기
    this.myVoteStatus = false; // 현재 투표한 장소 없는 컴포넌트 표시
    this.locationGetDataHandler();
  }

  myVoteIdHandler(id:any){
    console.log(id)
    this.myVoteId = id;
    this.myVoteStatus = true;
    this.locationGetDataHandler(this.myVoteId);
  }
}
