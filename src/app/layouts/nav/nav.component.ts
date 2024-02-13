import { Component } from '@angular/core';
import {ModalStatusService} from "../../services/modal-status.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(
    private modalStatus: ModalStatusService,
    private router: Router,
  ) {
  }
  //로그아웃 모달창 오픈
  logOutConfirmHandler(){
    this.modalStatus.modalStatusSwitch(true);
  }

  //로그아웃 진행
  logOutHandler(){
    sessionStorage.clear();
    this.router.navigate(['/start/signin']);
  }
}
