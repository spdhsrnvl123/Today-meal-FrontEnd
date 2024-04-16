import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent implements OnInit, OnChanges{
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {}
  @Input() id: any;
  data: any = {};
  menuDataList: any = [];
  status: any;
  @Input() changeInfo : any = false;

  ngOnInit() {
    //각 장소 조회
    this.apiService.locationEachData(this.id).subscribe((data: any) => {
      this.data = data[0];
    });

    //각 메뉴 조회
    this.apiService.menuGetData(this.id).subscribe((data: any) => {
      this.menuDataList = data;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    //각 장소 조회
    this.apiService.locationEachData(this.id).subscribe((data: any) => {
      this.data = data[0];
    });
  }
}
