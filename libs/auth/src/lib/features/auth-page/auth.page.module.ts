import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AuthPageComponent } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
  },
];

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class AuthPageModule {}
