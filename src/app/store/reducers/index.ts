import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../../environments/environment";
import {ILoginState, loginReducer} from "./login.reducer";
import {ILanguageState, languageReducer} from "./language.reducer";

export interface IAppState {
  login: ILoginState;
  language: ILanguageState;
}

export const reducers: ActionReducerMap<IAppState> = {
  login: loginReducer,
  language: languageReducer
};

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? []
  : [];
