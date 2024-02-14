import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: 'register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  delete_active = 'delete_active';
  data: any = [];
  loadingData : any = [];
  temp: any = {};

  constructor(private apiService: ApiService, private router: Router) {}

  //초기 등록된 장소 조회
  ngOnInit() {
    this.getData();
    this.loadingLocation();
    this.temp = {
      id: '',
      name: '',
      pw: ''
    }
  }

  //등록된 장소 조회
  getData() {
    this.apiService.locationGetData().subscribe((data) => {
      this.data = data;
    });
  }

  // 삭제 대기 장소 조회
  loadingLocation(){
    this.apiService.loadingLocation().subscribe((data)=>{
      this.loadingData = data;
    })
  }

  //등록된 장소 삭제
  locationDelete(id: any) {
    this.apiService.locationDeleteData(id).subscribe(
      () => {
        this.getData();
        this.loadingLocation();
      });
  }

  //장소 상세 조회
  locationDetail(id: any) {
    this.router.navigate([`/location/`, id]);
  }

  //삭제대기 취소
  loadingCancel(id : any){
    this.apiService.loadingCancel(id).subscribe(
      ()=>{
        this.getData();
        this.loadingLocation();
      }
    )
  }
}
