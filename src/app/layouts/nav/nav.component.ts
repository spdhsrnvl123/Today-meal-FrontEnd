import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private router: Router) {}
  status: any;

  //로그아웃 모달창 오픈
  logoutModalHandler() {
    this.status = true;
  }

  //모달에서 닫기 버튼을 했을때 상태값 받아오기
  closeHandler(status: any) {
    this.status = status;
  }

  //로그아웃 진행
  logOutHandler() {
    sessionStorage.clear();
    this.router.navigate(['/start/signin']);
  }
}
