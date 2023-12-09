import { props, emptyProps } from '@ngrx/store';
import {Credentials} from "./models/credentials";
import { createActionGroup } from '@ngrx/store';

export const AuthActions = createActionGroup({
  source: 'Login Page',
  events: {
    login: props<{ credentials: Credentials }>(),
    loginSuccess: emptyProps(),
    loginFailure: emptyProps(),
  },
});
