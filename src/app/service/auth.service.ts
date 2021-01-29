import { UserLogin } from './../model/UserLogin'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/users/login', userLogin)
  }

  register(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/users/register', user)
  }

  logged() {
    let ok = false
    
    if (environment.token != '') {
      ok = true
    }

    return ok
  }

}
