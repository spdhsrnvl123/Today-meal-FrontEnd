import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rank-top',
  templateUrl: './rank-top.component.html',
  styleUrls: ['./rank-top.component.css']
})
export class RankTopComponent implements OnChanges{
  @Input() voteData : any;
  highestVoteItem : any

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.voteData);

    // vote_count가 가장 높은 항목 찾기
    let highestVoteItem = this.voteData.reduce((prev:any, current:any) => {
      return (prev.vote_count > current.vote_count) ? prev : current;
    });
    this.highestVoteItem = highestVoteItem;
    console.log(this.highestVoteItem)
  }
}
