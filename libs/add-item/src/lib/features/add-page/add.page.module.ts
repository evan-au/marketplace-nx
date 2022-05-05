import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AddPageComponent } from './add.page';
import { AddItemFormComponent } from '../../ui/add-item-form/add-item-form.component';

const routes: Routes = [
  {
    path: '',
    component: AddPageComponent,
  },
];

@NgModule({
  declarations: [AddPageComponent, AddItemFormComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class AddPageModule {}
