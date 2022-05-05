import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AddPageComponent } from './add.page';

const routes: Routes = [
  {
    path: '',
    component: AddPageComponent,
  },
];

@NgModule({
  declarations: [AddPageComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class AddPageModule {}
