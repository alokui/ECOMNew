import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addProductMsg: string|undefined;
  constructor(private product:ProductService) { }

  addProducts(data: any){
   console.log(data)
    this.product.addProductItems(data).subscribe((res) => {
     console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
