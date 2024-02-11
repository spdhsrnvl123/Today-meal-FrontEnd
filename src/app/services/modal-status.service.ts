import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalStatusService {
  modalStatusSubject: Subject<any> = new Subject<any>();
  modalStatus: any;

  modalStatusSwitch(status: any) {
    console.log(status);
    this.modalStatus = status;
    this.modalStatusSubject.next(status);
  }
}
