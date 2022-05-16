import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }
  user= {
      userName: "",
      password: "",
      rememberMe: true,
      expired: 10000
  }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.user)
  }
}
