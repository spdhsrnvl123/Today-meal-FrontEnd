import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import { ModalStatusService } from 'src/app/services/modal-status.service';

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
  constructor(private modalStatus : ModalStatusService){}

  @Input() delete_active: String = '';
  @Input() data: any = [];
  @Output() delete_item_id = new EventEmitter<string>();
  @Output() detail_item_id = new EventEmitter<string>();
  @Output() modlaStatus = new EventEmitter<Boolean>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.data);
  }

  //부모컴포넌트에게 삭제 id값 넘겨주는 메소드
  parentDeleteReq(id: any) {
    this.delete_item_id.emit(id);
  }

  //부모컴포넌트에게 id값 넘겨주는 메소드
  parentDetailReq(id: any) {
    this.detail_item_id.emit(id);
    this.modalStatus.modalStatusSwitch(true);
  }
}
