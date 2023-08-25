import {createAction, props} from "@ngrx/store";
import {LoginCredential, LoginResponse} from "../../models/login-credential";

export const login = createAction('LOGIN',  props<{ payload: LoginCredential }>() );
export const loginFail = createAction('LOGIN FAIL',  props<{ payload: any }>() );
export const loginSuccess = createAction('LOGIN SUCCESS',  props<{ payload: LoginResponse }>());
