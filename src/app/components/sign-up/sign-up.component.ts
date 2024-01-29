import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent{
  @ViewChild('f') signupForm : NgForm | undefined;
  hide = true;
  password_1 :String = '';
  password_2 :String  = '';
  passwordConfirm : any;

  onSubmit(){
    console.log(this.signupForm)
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
