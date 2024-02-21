import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { Subscription } from 'rxjs';

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
    // //각 장소 조회
    this.apiService.locationEachData(this.id).subscribe((data: any) => {
      this.data = data[0];
    });

    //각 메뉴 조회
    this.apiService.menuGetData(this.id).subscribe((data: any) => {
      this.menuDataList = data;
      console.log(this.menuDataList);
    });

    console.log(this.changeInfo)
  }

  ngOnChanges(changes: SimpleChanges) {
    //각 장소 조회
    this.apiService.locationEachData(this.id).subscribe((data: any) => {
      this.data = data[0];
    });
  }
}
