import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rank-card',
  templateUrl: './rank-card.component.html',
  styleUrls: ['./rank-card.component.css']
})
export class RankCardComponent implements OnChanges{
  @Input() voteData : any = [];
  data : any;

  ngOnChanges(changes: SimpleChanges) {
    let data = this.voteData.sort((a:any,b:any)=>{
      return  b.vote_count - a.vote_count;
    })

    //투표 수에 따른 투표순위 속성 값 추가
    let rank = 1;
    for(let i = 0; i< data.length; i++){
      if(i>0 && data[i]['vote_count'] !== data[i-1]['vote_count']){
        rank++;
      }
      data[i]["rank"] = rank;
    }
    this.data = data.slice(0,3);
    console.log(this.data)
  }
}
