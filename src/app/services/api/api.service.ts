import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
    return this.http.post("http://localhost:8000/register", id, httpOptions)
  }

  // 장소 조회
  locationData(){
    return this.http.get("http://localhost:8000/location");
  }

  // 각 장소 조회
  locationEachData(id:any){
    return this.http.get(`http://localhost:8000/location/${id}`);
  }

}
