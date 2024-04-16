import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent{
  constructor(private apiService: ApiService, private router:Router) {
    this.formData = {
    }
  }

  @ViewChild('f') signupForm : NgForm | undefined;
  // joinData  = {};
  duplicationConfirm = false;
  duplicationConfirmReject = false;
  message: string = '';
  formData: any = {};
  confirm : boolean = false;
  // @ts-ignore

  onSubmit(){
    let joinData = {
      "user_id" : this.signupForm?.form.value.id,
      "name" : this.signupForm?.form.value.name,
      "password" : this.signupForm?.form.value.passwordFirst,
    }
    if(this.#isComplete(joinData)) {
      this.apiService.joinReq(joinData).subscribe(data =>{
          if (data == 1){
            // @ts-ignore
            // this.router.navigate("/start/success")
            this.router.navigate(["/login"]);
          }
        }
      )
    }
  }

  #isComplete = (formData: any): any => {
    if(formData.user_id?.length > 3 &&
      formData.name?.length >0 &&
      this.signupForm?.value.passwordFirst == this.signupForm?.value.passwordSecond &&
      this.signupForm?.value.passwordFirst.length >0 &&
      this.signupForm?.value.passwordSecond.length >0 &&
      this.confirm
    ) {
      return true;
    }else{
      if(!this.confirm){
        this.message = '중복 검사를 진행해주세요.'
      }else{
        this.message = '다시 입력해주세요.';
      }
      return false;
    }
  }

  onIdChange(value: string) {
    if(value){
      this.duplicationConfirm = false
      this.duplicationConfirmReject = false
    }
  }

  //아이디 중복 검사
  duplicateTest() {
    this.message = ""
    let pattern = /[\s]/g; // 공백 체크 정규 표현식
    if(pattern.test(this.signupForm?.form.value.id)){
      this.duplicationConfirm = false;
      this.duplicationConfirmReject = true;
      return
    }

    if(this.signupForm?.form.value.id?.length >= 3) {
      this.apiService.duplicationReq(this.signupForm?.form.value.id).subscribe((data)=>{
        if(data == 1){
          this.duplicationConfirm = false;
          this.duplicationConfirmReject = true;
          this.confirm = false;
        }else{
          this.duplicationConfirmReject = false;
          this.duplicationConfirm = true;
          this.confirm = true;
        }
      })
    }else{
    }
  }
}
