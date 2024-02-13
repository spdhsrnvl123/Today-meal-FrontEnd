import { Component } from '@angular/core';
import {ModalStatusService} from "../../services/modal-status.service";

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent {
  status = false;
  constructor(
    private modalStatus: ModalStatusService
  ) {
  }

  hide = true;

  resignHandler(){
    this.status = true;
    this.modalStatus.modalStatusSwitch(true);
  }

  cancelHandler(close:any){
    this.status = close
  }

}
