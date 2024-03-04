import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api: String = 'http://localhost:8000';
  private headerOption = {};

  constructor(private http: HttpClient) {
    this.#setInit();
  }

  #setInit = () => {
    this.#setInitToken();
  }

  #setInitToken = () => {
    if(sessionStorage.getItem('accessToken')) {
      this.headerOption = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        }),
      };
    }
  }

  //전달받은 토큰값을 세션스토리지에 저장
  setHeaderOption = (token: string) => {
    sessionStorage.setItem('accessToken', token);
    this.headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
  };

  //회원가입 유저 정보 저장
  joinReq(userData: any) {
    console.log(userData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.http.post(`${this.api}/join`, userData, httpOptions);
  }

  //아이디 중복 검사
  duplicationReq(user_id: any) {
    return this.http.get(`${this.api}/duplication/${user_id}`);
  }

  //로그인
  loginReq(userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':
          'multipart/form-data; boundary=<calculated when request is sent>',
        Authorization: 'my-auth-token',
      }),
    };
    return this.http.post(`${this.api}/login`, userData);
  }

  // 등록 요청
  registerData(id: number) {
    return this.http.post(`${this.api}/register`, id, this.headerOption);
  }

  // 등록된 장소 조회
  locationGetData() {
    return this.http.get(`${this.api}/location`, this.headerOption);
  }

  // 삭제 대기 장소 조회
  loadingLocation() {
    return this.http.get(`${this.api}/loading`, this.headerOption);
  }

  // 각 장소 조회
  locationEachData(id: any) {
    return this.http.get(`${this.api}/location/${id}`, this.headerOption);
  }

  // 장소 삭제
  locationDeleteData(id: any) {
    return this.http.get(
      `${this.api}/location/delete/${id}`,
      this.headerOption
    );
  }

  // 각 메뉴 조회
  menuGetData(id: any) {
    return this.http.get(`${this.api}/menu/${id}`, this.headerOption);
  }

  //장소 삭제 취소
  loadingCancel(id: any) {
    return this.http.get(`${this.api}/loading/cancel/${id}`, this.headerOption);
  }

  // 등록 요청
  vote(data : any) {
    return this.http.post(`${this.api}/vote`, data, this.headerOption);
  }
}
