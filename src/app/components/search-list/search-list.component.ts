import {AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnChanges{
  @Input() data :any = '';
  @Input() idx:any;
  @Output() regiDataStatus = new EventEmitter<any>();
  exist: any; // status 값을 템플릿에서 사용할 변수
  constructor(private apiService : ApiService) {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  register(id:number){
    this.apiService.registerData(id).subscribe(
      data =>{
        this.exist = data;
        if(this.exist.status == '등록이 완료되었습니다.'){
          this.regiDataStatus.emit(true)
        }
      }
    );
  }

}
