import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();
  constructor() { }

  addToCart(food: Food) {
    let cartItem = this.cart.items.find(x => x.food.id === food.id);
    if (cartItem) {
      this.changeQun(food.id, cartItem.quantity + 1);
      return;
    } else {
      this.cart.items.push(new CartItem(food))
    }
  }

  removeFromcart(foodId: string) {
    this.cart.items = this.cart.items.filter(x => x.food.id != foodId)
  }

  changeQun(foodId: string, a: number) {
    let cartItem = this.cart.items.find(i => i.food.id === foodId);
    if (!cartItem) return;

    // let quantity = parseInt(a);
    if (isNaN(a) || a < 0) return;

    cartItem.quantity = a;
  }
  
  getCartCount(): Observable<number> {
    console.log(this.cart.items.length);
    return of(this.cart.items.length);
  }
  

  getcart(): Cart {
    return this.cart;
  }
}
