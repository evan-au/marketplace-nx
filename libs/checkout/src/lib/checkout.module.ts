import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./features/checkout-page/checkout.page.module').then(
            (m) => m.CheckoutPageModule
          ),
      },
    ]),
  ],
})
export class CheckoutModule {}
