import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KakaoMapApiService {
  dataStatusSubject: Subject<any> = new Subject<any>();
  data=[];

  setData(data: any){
    this.data = data;
    this.dataStatusSubject.next(data);
  }
}
