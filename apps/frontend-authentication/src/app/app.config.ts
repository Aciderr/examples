import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {firebaseConfig} from "./../../environment";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(provideFirebaseApp(() => {
      console.log('firebaseConfig', firebaseConfig);
      return initializeApp(firebaseConfig);
    })),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
};
