import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  showLogin: boolean = false;
  authError:string = "";
  alertMsg: boolean = false;
  constructor(private sellerService: SellerService, private router:Router) { }

  ngOnInit(): void {
    this.sellerService.reloadSeller()
  }

  signUpLogin(data: SignUp): void {
    this.sellerService.userSignUp(data)
  }

  loginForm(data: any) {
    this.sellerService.userLogin(data);
   // console.log(data);
    this.sellerService.isLoginError.subscribe((isError) => {
      if(isError){
        this.authError = "Enter valid name or password"
        this.alertMsg = true
      }
    })
  }

  openLogin(){
    this.showLogin= true
  }

  openSignup(){
    this.showLogin= false
  }
}
