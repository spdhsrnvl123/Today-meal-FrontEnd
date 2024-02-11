import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { ModalStatusService } from 'src/app/services/modal-status.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(
    private router : Router, private modalStatus: ModalStatusService
  ) {
    this.modalStatusSubscription = new Subscription();
  }

  status: any;
  @Input() width: any;
  @Input() height: any;
  modalStyle = '';
  private modalStatusSubscription: Subscription;

  ngOnInit(): void {
    this.status = this.modalStatus.modalStatus;

    // 서비스의 변경을 구독합니다.
    this.modalStatusSubscription =
      this.modalStatus.modalStatusSubject.subscribe((newStatus: any) => {
        console.log(newStatus);
        this.status = newStatus;
        // 여기서 변경된 상태에 대한 처리를 수행합니다.
      });
  }

  modalClose(){
    this.modalStatus.modalStatusSwitch(false);
    this.router.navigate([`/main`]);
  }

  ngOnDestroy(): void {
    // 구독을 해제합니다.
    this.modalStatusSubscription.unsubscribe();
  }
}
