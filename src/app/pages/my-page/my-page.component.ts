import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
})
export class MyPageComponent implements OnInit{
  constructor(private router: Router) {}

  status = false;
  hide = true;
  pwChangeStatus = false;
  pathMoveStatus = false;

  userId : any;
  userName : any;

  ngOnInit() {
    if(sessionStorage.getItem('accessToken')){
      console.log("로그인 한 사용자입니다.")
    }else{
      console.log("로그인 하지 않은 사용자입니다.")
      this.router.navigate(["/start/signin"]);
    }

    this.userId = sessionStorage.getItem('userId');
    this.userName = sessionStorage.getItem('username');
  }

  pathMOveStatusHandler(status:any){
    this.pathMoveStatus = status;
  }

  //모달에서 닫기 버튼을 했을때 상태값 받아오기
  closeHandler(status: any) {
    this.status = status;
  }

  pwChangesStatusHandler(pwChangeStatus: any) {
    this.pwChangeStatus = pwChangeStatus;
  }

  resignModalHandler() {
    this.status = true;

  }
}
