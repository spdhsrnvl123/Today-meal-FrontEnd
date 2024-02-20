import { Component } from '@angular/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
})
export class MyPageComponent {
  status = false;
  hide = true;
  pwChangeStatus = false;
  pathMoveStatus = true;

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
