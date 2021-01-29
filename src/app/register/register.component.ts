import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../model/User";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User
  confirmPassword: string
  levelUser: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
  }

  confirmPass(event: any){
    this.confirmPassword = event.target.value
  }

  userLevel(event: any){
    this.levelUser = event.target.value
  }

  register(){
    this.user.level = this.levelUser

    if (this.user.pass != this.confirmPassword) {
      alert('Senhas incompativeis.')
    } else {
      this.authService.register(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('User registered')
      })
    }
  }



}
