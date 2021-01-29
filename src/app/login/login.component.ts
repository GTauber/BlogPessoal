import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService, //primeira letra minuscula indica que é variavel...
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  login(){
    this.authService.login(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.name = this.userLogin.name
      environment.photo = this.userLogin.photo
      environment.id = this.userLogin.id

      console.log(environment.token)
      console.log(environment.name)
      console.log(environment.photo)
      console.log(environment.id)

      this.router.navigate(['/home'])
    }, error => {
      if(error.status == 500) {
        alert('Username or password incorrect')
      }
    })
  }

}
