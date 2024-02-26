import {AfterViewInit, Component, ElementRef, EventEmitter, Output, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements AfterViewInit{
  @Output() reviewCardInfo = new EventEmitter<any>();
  // @Output() id = new EventEmitter<Boolean>();
  @ViewChild("modalContent") modalContent : ElementRef | undefined;

  ngAfterViewInit() {
    console.log(this.modalContent)
  }

  //리뷰등록 모달 오픈
  open(id:any){
    // this.id.emit(id);
    this.reviewCardInfo.emit({
      status : true,
      id : id
    });
  }
}
