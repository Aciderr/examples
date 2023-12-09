import {Component, inject} from '@angular/core';
import {Auth, idToken, signInWithPopup} from "@angular/fire/auth";
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  standalone: true,
  selector: 'nx-github-actions-to-aws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private auth: Auth = inject(Auth);
  idToken$ = idToken(this.auth);

  constructor() {
    this.idToken$.subscribe((token: string | null) => {
      console.log(token);
    })
  }

  onLoginButtonClock(): void {
    console.log('auth', this.auth.config);
      signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(() => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
