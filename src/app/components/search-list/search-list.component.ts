import {AfterViewInit, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnChanges{
  @Input() data :any = '';
  exist: any; // status 값을 템플릿에서 사용할 변수
  constructor(private apiService : ApiService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.data)
  }

  register(id:number){
    console.log(id);
    this.apiService.registerData(id).subscribe(data =>this.exist = data);
  }

}
