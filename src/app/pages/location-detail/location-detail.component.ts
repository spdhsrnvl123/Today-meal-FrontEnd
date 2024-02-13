import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api/api.service";
import { ModalStatusService } from 'src/app/services/modal-status.service';
import {Subscription} from "rxjs";

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
  private modalStatusSubscription: Subscription
  status: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private modalStatus: ModalStatusService,
    private router : Router
  ) {
    this.modalStatusSubscription = new Subscription();
  }



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



    this.modalStatusSubscription =
      this.modalStatus.modalStatusSubject.subscribe((newStatus: any) => {
        // console.log(newStatus);
        this.status = newStatus;
        // console.log(this.status);
        if(this.status == false){
          // this.router.navigate([`/main`]);
        }
      });
  }
}
