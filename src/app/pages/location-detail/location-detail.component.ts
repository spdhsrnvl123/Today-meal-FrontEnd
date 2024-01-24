import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api/api.service";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
  standalone : true,
  imports: [MatCardModule, MatButtonModule, NgIf, NgForOf]
})
export class LocationDetailComponent implements OnInit{
  data : any = [];
  constructor(private route : ActivatedRoute,private apiService : ApiService) {
  }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    //각 장소 조회
    this.apiService.locationEachData(id).subscribe((data: any) => {
      this.data = data[0];
      console.log(this.data);
    });

    //각 메뉴 조회
    this.apiService.menuGetData(id).subscribe((data: any) => {
      console.log(data)
    });
  }
}
