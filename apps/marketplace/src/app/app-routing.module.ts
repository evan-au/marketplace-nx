import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@marketplace-nx/auth').then((m) => m.AuthModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('@marketplace-nx/checkout').then((m) => m.CheckoutModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
