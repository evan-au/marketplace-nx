import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomePageComponent } from './home.page';
import { ItemCardComponent } from '../../ui/item-card/item-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent, ItemCardComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class HomePageModule {}
