import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  templateUrl: './cart-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartModalComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit(): void {
    return;
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  handleCheckout() {
    this.router.navigate(['checkout']).then(() => {
      this.dismissModal();
    });
  }
}
