import {Component, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  @ViewChild('f') sign_in_form : NgForm | undefined;

  constructor(private apiService: ApiService, private router:Router) {}


  onSubmit(){
    console.log(this.sign_in_form);

    const singData ={
      "username": this.sign_in_form?.form.value.id,
      "password": this.sign_in_form?.form.value.password
    }

    this.apiService.loginReq(singData).subscribe((data)=>{
      console.log(data);
    })

  }
}
