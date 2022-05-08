import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  templateUrl: './cart-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartModalComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
    return;
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
