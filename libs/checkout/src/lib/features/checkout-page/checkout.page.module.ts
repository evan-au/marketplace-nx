import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CheckoutPageComponent } from './checkout.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPageComponent,
  },
];

@NgModule({
  declarations: [CheckoutPageComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class CheckoutPageModule {}
