import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
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
export class CardComponent implements OnChanges {
  @Input() voteButtonDel: String = '';
  @Input() data: any = [];
  @Output() delItemId = new EventEmitter<string>();
  @Output() id = new EventEmitter<string>();
  @Output() status = new EventEmitter<Boolean>();
  @Output() delItemModalAction = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.data);
  }

  //부모컴포넌트에게 삭제 id값 넘겨주는 메소드
  parentDeleteReq(id: any) {
    console.log(id);
    this.delItemModalAction.emit("delItemModalAction")
    this.delItemId.emit(id);
  }

  //부모컴포넌트에게 id값 넘겨주는 메소드
  parentReq(id: any) {
    console.log(id);
    //id값 전달
    this.id.emit(id);
    //모달 오픈 요청
    this.status.emit(true);
  }
}
