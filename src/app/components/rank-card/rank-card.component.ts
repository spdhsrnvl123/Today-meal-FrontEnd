import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rank-card',
  templateUrl: './rank-card.component.html',
  styleUrls: ['./rank-card.component.css']
})
export class RankCardComponent implements OnChanges{
  @Input() voteData : any;

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.voteData);
  }
}
