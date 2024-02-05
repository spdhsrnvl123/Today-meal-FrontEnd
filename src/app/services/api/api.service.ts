import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api: String = 'http://localhost:8000';
  headerOption: any = {};
  constructor(private http: HttpClient) {

  }

  setHeaderOption = (token: string) => {
    sessionStorage.setItem("accessToken",token);
    this.headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      }),
    }
  }

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
    const sessionId = '3DB867074B841FF51BCD0F9E148A4D2D';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer JSESSIONID=' + sessionId,
      }),
    };
    return this.http.get(`${this.api}/location`,httpOptions);
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
    console.log(userData)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.http.post(`${this.api}/join`, userData, httpOptions);
  }

  //아이디 중복 검사
  duplicationReq(user_id:any){
    return this.http.get(`${this.api}/duplication/${user_id}`)
  }

  //로그인
  loginReq(userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        Authorization: 'my-auth-token',
      }),
    };
    return this.http.post(`${this.api}/login`, userData);
  }

}
