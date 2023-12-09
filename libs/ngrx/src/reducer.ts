import { createReducer, on } from '@ngrx/store';
import { AuthActions } from "./actions";

export enum RequestStatus {
  Loading,
  Success,
  Error,
}

export interface State {
  requestStatus?: RequestStatus;
  errorMessage?: string;
}

export const initialState = {};

export const loginReducer = createReducer<State>(
  initialState,
  on(AuthActions.login, state => ({ ...state, status: RequestStatus.Loading })),
  on(AuthActions.loginSuccess, state => ({ ...state, status: RequestStatus.Success })),
  on(AuthActions.loginFailure, state => ({ ...state, status: RequestStatus.Error })),
);
