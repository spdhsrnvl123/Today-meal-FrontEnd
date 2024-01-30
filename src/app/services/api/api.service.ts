import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api: String = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  // 등록 요청
  registerData(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.http.post(`${this.api}/register`, id, httpOptions);
  }

  // 등록된 장소 조회
  locationData() {
    return this.http.get(`${this.api}/location`);
  }

  // 삭제 대기 장소 조회
  loadingLocation(){
    return this.http.get(`${this.api}/loading`)
  }

  // 각 장소 조회
  locationEachData(id: any) {
    return this.http.get(`${this.api}/location/${id}`);
  }

  // 장소 삭제
  locationDeleteData(id: any) {
    return this.http.get(`${this.api}/location/delete/${id}`);
  }

  // 각 메뉴 조회
  menuGetData(id: any) {
    return this.http.get(`${this.api}/menu/${id}`);
  }

  //장소 삭제 취소
  loadingCancel(id:any){
    return this.http.get(`${this.api}/loading/cancel/${id}`);
  }

  //회원가입 유저 정보 저장
  joinReq(userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.http.post(`${this.api}/join`, userData, httpOptions);
  }
}
