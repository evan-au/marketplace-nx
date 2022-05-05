import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../firebase-env/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  imports: [
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
  ],
})
export class FirebaseModule {}
