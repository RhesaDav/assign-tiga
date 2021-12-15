import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { CartService } from '../_services/cart.service';
import { ProductService } from '../_services/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[]=[]
  public totalItem : number = 0
  constructor(private productService: ProductService, private cartService : CartService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>{
      this.products = products;
      console.log(products)

      this.products.forEach((a: any) => {
        Object.assign(a, {quantity: 1,total:a.price})
      })
    })

    this.cartService.getProduct()
    .subscribe(res => {
      this.totalItem = res.length
    })
  }

  addToCart(product: any){
    this.cartService.addtoCart(product)
  }

}
