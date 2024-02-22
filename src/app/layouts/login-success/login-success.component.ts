import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit{
  constructor( private router:Router) {}
  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(["/start/signin"]);
    },2000)
  }
}
