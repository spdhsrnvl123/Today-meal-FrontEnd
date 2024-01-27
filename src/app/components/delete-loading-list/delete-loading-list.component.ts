import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-delete-loading-list',
  templateUrl: './delete-loading-list.component.html',
  styleUrls: ['./delete-loading-list.component.css'],
})
export class DeleteLoadingListComponent implements OnChanges {
  @Input() loadingData: any = [];
  @Output() cancel_item_id = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {}

  loadingCancel(id: any) {
    this.cancel_item_id.emit(id)
  }
}
