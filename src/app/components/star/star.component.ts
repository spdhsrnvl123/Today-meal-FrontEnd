import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit{
  @Input() currentScore: number | undefined;
  @Output() point = new EventEmitter<number>();

  score: number = 1;

  constructor() {}

  ngOnInit(): void {
    if (this.currentScore) {
      this.score = this.currentScore;
    }
  }

  handleCheck(index: number) {
    this.score = index;
    this.point.emit(this.score);
  }
}
