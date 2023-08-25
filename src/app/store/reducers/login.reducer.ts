import {createReducer, on} from "@ngrx/store";
import {login, loginFail, loginSuccess} from "../actions/login.actions";

export interface ILoginState {
  email: string;
  fullName: string;
  isLoggingIn: boolean;
  errorMessage: string;
}

const initialState: ILoginState = {
  email: '',
  fullName: '',
  isLoggingIn: false,
  errorMessage: ''
}

export const loginReducer = createReducer(
  initialState,

  on(login, (state) => {
    return { ...state, isLoggingIn: true };
  }),
  on(loginSuccess, (state, {payload}) => {
    return { ...state, isLoggingIn: false, email: payload.email, fullName: payload.fullName};
  }),
  on(loginFail, (state) => {
    return { ...state, isLoggingIn: false, errorMessage: 'Invalid Credentials' };
  }),

);
