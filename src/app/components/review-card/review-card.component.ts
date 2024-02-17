import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {
  @Output() status = new EventEmitter<Boolean>();

  //리뷰등록 모달 오픈
  open(){
    this.status.emit(true);
  }
}
