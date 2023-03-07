import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount: Cart;

  constructor(private cartService: CartService) {
    this.cartCount = this.cartService.getcart();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
