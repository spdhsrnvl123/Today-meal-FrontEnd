import { Component, EventEmitter, Output } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-pw-change',
  templateUrl: './pw-change.component.html',
  styleUrls: ['./pw-change.component.css'],
})
export class PwChangeComponent {
  constructor(private apiService : ApiService) {}

  @Output() cancelStatus = new EventEmitter<Boolean>();
  hide = true;
  secondHide = true;
  oldPassword : string = '';
  newPassword : string = '';
  message : string  = '';

  cancelHandler(){
    this.cancelStatus.emit(false);
  }

  userChangeHandler(){
    console.log(this.oldPassword);
    console.log(this.newPassword);
    let data = {
      "user_id" : sessionStorage.getItem('userId'),
      "oldPassword" : this.oldPassword,
      "newPassword" : this.newPassword
    }
    this.apiService.userChange(data).subscribe((data)=>{
      if(data == 1){
        console.log("비밀번호가 변경되었습니다.")
        this.message = "비밀번호가 변경되었습니다."
        setTimeout(()=>{
          this.cancelHandler();
        },1000)
      }else{
        console.log("비밀번호를 다시 입력해주세요.")
        this.message = "비밀번호를 다시 입력해주세요."
      }
    })
  }
}
