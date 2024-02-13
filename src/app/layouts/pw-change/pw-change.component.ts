import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pw-change',
  templateUrl: './pw-change.component.html',
  styleUrls: ['./pw-change.component.css'],
})
export class PwChangeComponent {
  hide = true;
  @Output() cancelStatus = new EventEmitter<Boolean>();

  cancelHandler(){
    this.cancelStatus.emit(false);
  }
}
