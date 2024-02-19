import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-review-register',
  templateUrl: './review-register.component.html',
  styleUrls: ['./review-register.component.css']
})
export class ReviewRegisterComponent implements OnChanges{
  @Input() reviewCardId :any;
  item:any;
  arr : any = [
    {
      id : '24531540',
      title : '가츠몽',
      img : 'app/assets/reviewOne.jpg',
      date : '2/16(5일전)'
    },
    {
      id : '803977050',
      title : '흑도야지',
      img : 'app/assets/reviewTwo.jpg',
      date : '2/19(2일전)'
    },
    {
      id : '8137464',
      title : '소한마리',
      img : 'app/assets/reviewThird.jpg',
      date : '2/20(1일전)'
    },
  ]

  ngOnChanges(changes: SimpleChanges) {
    let item = this.arr.filter((data :any)=>{
      return data.id == this.reviewCardId;
    })
    this.item = item;
  }
}
