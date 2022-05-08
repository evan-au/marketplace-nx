import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartModalComponent } from '../../ui/cart-modal/cart-modal.component';

@Component({
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit(): void {
    return;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CartModalComponent,
    });
    return await modal.present();
  }
}
