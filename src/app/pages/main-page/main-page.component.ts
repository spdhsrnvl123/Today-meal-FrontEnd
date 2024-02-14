import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";
import { ModalStatusService } from 'src/app/services/modal-status.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit, AfterViewInit {
  data: any = [];
  status:any;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private modalStatus: ModalStatusService
  ) {}

  //초기 등록된 장소 조회
  ngOnInit() {

    this.modalStatus.modalStatusSwitch(false)
  }

  ngAfterViewInit() {
    this.locationGetDataHandler();
  }

  //등록된 장소 조회
  locationGetDataHandler() {
    this.apiService.locationGetData().subscribe((data) => {
      this.data = data;
    });
  }

  //장소 상세 조회
  locationDetail(id: any) {
    console.log(id);
    this.router.navigate([`/main/location/`, id]);
  }

  //모달상태
  modalStatusChange(status: any) {
    this.modalStatus = status;
    this.status = status;
  }

  //뒤로가기
  pathMove(path:any){
    if(path == false){
      this.status = false;
      this.router.navigate([`/main`]);
    }
  }
}
