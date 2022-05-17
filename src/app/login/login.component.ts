import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private authService: AuthService
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
    this.authService.login(this.user)
    .pipe()
    .subscribe({
      next: (res)=>{ 
        console.log(res)
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }
}
