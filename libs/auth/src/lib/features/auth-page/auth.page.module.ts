import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AuthPageComponent } from './auth.page';
import { SignInComponent } from '../../ui/sign-in/sign-in.component';
import { SignUpComponent } from '../../ui/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
  },
];

@NgModule({
  declarations: [AuthPageComponent, SignInComponent, SignUpComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class AuthPageModule {}
