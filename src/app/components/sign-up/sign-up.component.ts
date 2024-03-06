import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent{
  constructor(private apiService: ApiService, private router:Router) {
    this.formData = {
      // user_id: string,
    }
  }

  @ViewChild('f') signupForm : NgForm | undefined;
  // joinData  = {};
  duplicationConfirm = false;
  duplicationConfirmReject = false;
  message: string = '';
  formData: any = {};
  // @ts-ignore

  onSubmit(){
    console.log(this.signupForm)
    let joinData = {
      "user_id" : this.signupForm?.form.value.id,
      "name" : this.signupForm?.form.value.name,
      "password" : this.signupForm?.form.value.passwordFirst,
    }
    if(this.#isComplete(joinData)) {
      console.log(joinData)
      this.apiService.joinReq(joinData).subscribe(data =>{
          if (data == 1){
            // @ts-ignore
            // this.router.navigate("/start/success")
            this.router.navigate(["/start/signin"]);
          }
        }
      )
    }
  }

  #isComplete = (formData: any): any => {
    console.log(formData.user_id)
    if(formData.user_id?.length > 3 && formData.name?.length >0 && this.signupForm?.value.passwordFirst == this.signupForm?.value.passwordSecond) {
      console.log(1)
      return true;
    }else{
      this.message = '다시 입력해주세요.';
      return false;
    }
  }

  onIdChange(value: string) {
    console.log(value)
    if(value){
      this.duplicationConfirm = false
      this.duplicationConfirmReject = false
    }
  }

  //아이디 중복 검사
  duplicateTest(){
    if(this.signupForm?.form.value.id?.length >= 3){
      this.apiService.duplicationReq(this.signupForm?.form.value.id).subscribe((data)=>{
        console.log(data)
        if(data == 1){
          this.duplicationConfirm = false;
          this.duplicationConfirmReject = true;
        }else{
          this.duplicationConfirmReject = false;
          this.duplicationConfirm = true;
        }
      })
    }else{
      console.log("3글자 이상 작성해주세요.")
    }
  }
}
