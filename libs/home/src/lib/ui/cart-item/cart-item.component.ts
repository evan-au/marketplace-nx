import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-cart-item',
  templateUrl: './cart-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  // constructor() {}

  ngOnInit(): void {
    return;
  }
}
