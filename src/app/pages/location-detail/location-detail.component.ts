import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api/api.service";
import { ModalStatusService } from 'src/app/services/modal-status.service';
// import {MatCardModule} from "@angular/material/card";
// import {MatButtonModule} from "@angular/material/button";
// import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
  // standalone : true,
  // imports: [MatCardModule, MatButtonModule, NgIf, NgForOf]
})
export class LocationDetailComponent implements OnInit {
  data: any = {};
  menuDataList: any = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private modalStatus: ModalStatusService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    //각 장소 조회
    this.apiService.locationEachData(id).subscribe((data: any) => {
      this.data = data[0];
    });

    //각 메뉴 조회
    this.apiService.menuGetData(id).subscribe((data: any) => {
      this.menuDataList = data;
      console.log(this.menuDataList);
    });

    this.modalStatus.modalStatusSwitch(true);
  }
}
