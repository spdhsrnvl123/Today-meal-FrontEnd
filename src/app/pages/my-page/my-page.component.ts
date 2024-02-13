import { Component } from '@angular/core';
import {ModalStatusService} from "../../services/modal-status.service";

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent {
  constructor(
    private modalStatus: ModalStatusService
  ) {
  }

  hide = true;

  resignHandler(){
    this.modalStatus.modalStatusSwitch(true);
  }

}
