import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'seller', component: SellerAuthComponent },
  { path: 'seller-info', component: SellerInfoComponent, canActivate: [AuthGuard] },
  { path: 'seller-addProduct', component: SellerAddProductComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
