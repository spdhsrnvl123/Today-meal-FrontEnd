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

  @ViewChild('f') signInForm: NgForm | undefined;

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    if (this.signInForm && this.signInForm.valid) {
      const singData = {
        user_id: this.signInForm.form.value.id,
        password: this.signInForm.form.value.password
      };


      // FormData 객체 생성
      const formData = new FormData();
      formData.append('user_id', singData.user_id);
      formData.append('password', singData.password);


      // console.log(formData)

      // FormData를 API 서비스로 전송
      this.apiService.loginReq(formData).subscribe((response: any) => {
        console.log(response)
        if (response.accessToken) {
          //headerOption
          this.apiService.setHeaderOption(response.accessToken)
          this.router.navigate(["/main"]);
        } else {
          console.error('accessToken not found in response.');
        }
      });

    }
  }
}
