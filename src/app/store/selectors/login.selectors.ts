import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ILoginState} from "../reducers/login.reducer";


export const loginState = createFeatureSelector<ILoginState>('login');

export const selectLoginEmail = createSelector(
  loginState,
  state => state.email
);


export const selectLoginName = createSelector(
  loginState,
  state => state.fullName
);


export const selectLoginErrorMessage = createSelector(
  loginState,
  state => state.email
);


export const selectIsLoggingIn = createSelector(
  loginState ,
  state => state.isLoggingIn
);
