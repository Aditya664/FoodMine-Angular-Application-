import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart:Cart;
  constructor(private cartService:CartService,private foodService:FoodService) { 
    
    this.setCart()
    this.cartService.getCartCount();
  }

  setCart(){
    this.cart = this.cartService.getcart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromcart(cartItem.food.id);
    this.setCart();
    this.cartService.getCartCount();
  }


  changeQunt(cartItem:CartItem,quantityString:string){
    const quantity = parseInt(quantityString);
    this.cartService.changeQun(cartItem.food.id,quantity);
    this.setCart();
    this.cartService.getCartCount();
  }
  
  ngOnInit(): void {
      // this.getCartCount();
  }

  // getCartCount(){
  //   return this.cart.items.length
  // }
}
