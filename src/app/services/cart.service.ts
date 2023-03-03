import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();
  constructor() { }

  addToCart(food:Food){
    let cartItem = this.cart.items.find(x => x.food.id === food.id);
    if(cartItem){
      this.changeQun(food.id,cartItem.quantity + 1);
      return;
    }else{
      this.cart.items.push(new CartItem(food))
    }
  }

  removeFromcart(foodId:string){
      this.cart.items = this.cart.items.filter(x => x.food.id != foodId)
  }
  
  changeQun(foodId:string,quantity:number){
      let cartItem = this.cart.items.find(i => i.food.id === foodId);
      if(!cartItem) return;
      cartItem.quantity += quantity;
  }

  getcart():Cart{
    return this.cart;
  }
}
