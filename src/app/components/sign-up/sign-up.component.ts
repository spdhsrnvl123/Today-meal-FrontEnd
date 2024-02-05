import {Component, ViewChild} from '@angular/core';
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
  hide = true;
  password_1 :String = '';
  password_2 :String  = '';
  passwordConfirm : any;
  joinData  = {};

  onSubmit(){
    // console.log(this.signupForm?.form.value)
    this.joinData = {
      "user_id" : this.signupForm?.form.value.id,
      "name" : this.signupForm?.form.value.name,
      "password" : this.signupForm?.form.value.password,
    }

    this.apiService.joinReq(this.joinData).subscribe(data =>{
        if (data == 1){
          this.router.navigate(["/start/signin"]);
        }
      }
    )
  }

  duplicateTest(){
    console.log(1)
  }

  passwordCompare_1($event: any){
    this.password_1 = $event
  }
  passwordCompare_2($event: any){
    this.password_2 = $event
    this.passwordConfirm =this.password_1 == this.password_2
    console.log(this.passwordConfirm)
  }
}
