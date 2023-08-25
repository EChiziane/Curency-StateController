import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ILanguageState} from "../reducers/language.reducer";

export const languageState = createFeatureSelector<ILanguageState>('language');

export const selectAllLanguages = createSelector(
  languageState,
  state => state.languages
);


export const selectLanguageLoading = createSelector(
  languageState,
  state => state.isLoading
);


export const selectLanguageSuccessMessage = createSelector(
  languageState,
  state => state.successMessage
);


export const selectLanguageErrorMessage = createSelector(
  languageState,
  state => state.errorMessage
);


export const selectSelectedLanguage = createSelector(
  languageState,
  state => state.selectedLanguage
);
