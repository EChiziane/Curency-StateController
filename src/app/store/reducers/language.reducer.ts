import {createReducer, on} from "@ngrx/store";

import {SystemLanguage} from "../../models/system-language";
import {
  getLanguages,
  getLanguagesFail,
  getLanguagesSuccess,
  selectLanguage
} from "../actions/language.actions";

export interface ILanguageState {
  languages: SystemLanguage[],
  selectedLanguage: SystemLanguage;
  isLoading: boolean;
  isSaving: boolean;
  errorMessage: string;
  successMessage: string;
}

// @ts-ignore
const initialState: ILanguageState = {
  languages: [],
  selectedLanguage: new SystemLanguage(1,'en-US', 'English', true, 'en'),
  isLoading: false,
  isSaving: false,
  errorMessage: '',
  successMessage: ''
}

export const languageReducer = createReducer(
  initialState,
  on(getLanguages, (state) => {
    return { ...state, isLoading: true };
  }),
  on(getLanguagesSuccess, (state, { payload }) => {
    return {...state, languages: payload, isLoading: false}
  }),
  on(getLanguagesFail, (state, { payload }) => {
    return { ...state, isLoading: false};
  }),
  on(selectLanguage, (state, { payload }) => {
    return {...state, selectedLanguage: payload}
  }),
);
