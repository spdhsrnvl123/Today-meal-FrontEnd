import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private router: Router) {
  }
  @Input() width: any;
  @Input() height: any;
  @Input() status: any;
  @Output() close = new EventEmitter<Boolean>();
  modalStyle = '';

  //넓이, 높이 데이터 받아서 스타일 적용
  ngOnInit() {
    this.modalStyle = `width: ${this.width}px; height: ${this.height}px`;
  }

  //모달창 닫기
  modalClose() {
    this.close.emit(false);
  }

}
