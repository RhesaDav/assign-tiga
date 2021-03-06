import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any = []
  public grandTotal !: number
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res => {
      this.product = res
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  removeItem(product: any){
    this.cartService.removeCartItem(product)
  }

  emptyCart(){
    this.cartService.removeAllCart()
  }

}
