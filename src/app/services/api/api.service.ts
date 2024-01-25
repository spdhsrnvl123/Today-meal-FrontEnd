import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api :String = "http://localhost:8000";
  constructor(private http: HttpClient) {
  }

  // 등록 요청
  registerData(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    }
    return this.http.post(`${this.api}/register`, id, httpOptions)
  }

  // 장소 조회
  locationData(){
    return this.http.get(`${this.api}/location`);
  }

  // 각 장소 조회
  locationEachData(id:any){
    return this.http.get(`${this.api}/location/${id}`);
  }

  // 각 메뉴 조회
  menuGetData(id:any){
    return this.http.get(`${this.api}/menu/${id}`);
  }

}
