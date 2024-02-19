import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    NgForOf,
    NgIf,
    NgOptimizedImage,
    AsyncPipe,
  ],
})
export class CardComponent implements OnInit {
  @Input() voteButtonDel :any; // 페이지나 투표유무에 따른 버튼 보여주기 불린값
  @Input() data: any = [];
  @Input() pageStatus:any //등록또는 투표종료에 따른 삭제버튼 활성화 값
  @Output() delItemId = new EventEmitter<string>();
  @Output() id = new EventEmitter<string>();
  @Output() status = new EventEmitter<Boolean>();
  @Output() delItemModalAction = new EventEmitter<string>();
  @Output() myVoteId  = new EventEmitter<string>();

  voteItemId : any; //각 장소에서 투표버튼을 누른 장소에 따라서 현재 일치하는 id값에 따라서 버튼상태를 다르게 보여주기 위한 값

  ngOnInit() {
    console.log(this.voteButtonDel)
    if(sessionStorage.getItem('voteLocation')){
      this.voteItemId = sessionStorage.getItem('voteLocation')
    }
  }

  //부모컴포넌트에게 삭제 id값 넘겨주는 메소드
  parentDeleteReq(id: any) {
    // console.log(id);
    this.delItemModalAction.emit("delItemModalAction")
    this.delItemId.emit(id);
  }

  //부모컴포넌트에게 id값 넘겨주는 메소드
  parentReq(id: any) {
    //id값 전달
    this.id.emit(id);
    //모달 오픈 요청
    this.status.emit(true);
  }

  voteClickStatusHandler(itemId:any){
    //투표하기 버튼을 누른 아이템을 id값을 가지고 일치하는 데이터 추출
    let item = this.data.filter((data :any)=>{
      return data.id == itemId;
    })
    this.voteItemId = item[0].id;
    sessionStorage.setItem('voteLocation', this.voteItemId);
    this.myVoteId.emit(item[0].id)
  }
}
