import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  description:string = "Please fill the following !!!"
  css_style:string = "fw-bolder text-danger"

  username:string = ""

  getUsername(event:any){
    console.log(event.target.value);
    this.username =event.target.value
  }

  login(pswd:any){
    console.log(pswd.value);
    
    alert(`Username : "${this.username}",password : "${pswd.value}"`)
  }


}
