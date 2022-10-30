import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggdIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)
  
  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((res) => {
        localStorage.setItem('seller', JSON.stringify(res.body))
        this.isSellerLoggdIn.next(true);
        this.router.navigate(['seller-info'])
      })
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggdIn.next(true);
      this.router.navigate(['seller-info'])
    }
  }

  userLogin(data: Login) {
    // console.log(data)
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: 'response' })
      .subscribe((res: any) => {
        console.log(res)
        if (res && res.body && res.body.length) {
          localStorage.setItem('seller', JSON.stringify(res.body))
          this.router.navigate(['seller-info']);
        }else{
          console.log("login failed")
          this.isLoginError.emit(true)
        }
      })
  }
}
