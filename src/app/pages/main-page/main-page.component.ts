import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  data: any = [];

  constructor(private apiService: ApiService, private router: Router) {}

  //초기 등록된 장소 조회
  ngOnInit() {
    this.getData();
  }

  //등록된 장소 조회
  getData() {
    this.apiService.locationData().subscribe((data) => {
      this.data = data;
    });
  }
}
