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
  constructor(private apiService: ApiService, private router:Router) {}

  @ViewChild('f') signupForm : NgForm | undefined;
  // joinData  = {};
  duplicationConfirm = false;
  duplicationConfirmReject = false;

  onSubmit(){
    console.log(this.signupForm)
    let joinData = {
      "user_id" : this.signupForm?.form.value.id,
      "name" : this.signupForm?.form.value.name,
      "password" : this.signupForm?.form.value.passwordFirst,
    }

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
  onIdChange(value: string) {
    console.log(value)
    if(value){
      this.duplicationConfirm = false
      this.duplicationConfirmReject = false
    }
  }

  //아이디 중복 검사
  duplicateTest(){
    let id = this.signupForm?.form.value.id
    this.apiService.duplicationReq(id).subscribe((data)=>{
      console.log(data)
      if(data == 1){
        this.duplicationConfirm = false;
        this.duplicationConfirmReject = true;
      }else{
        this.duplicationConfirmReject = false;
        this.duplicationConfirm = true;
      }
    })
  }
}
