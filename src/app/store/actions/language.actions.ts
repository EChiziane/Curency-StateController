import {createAction, props} from "@ngrx/store";
import {SystemLanguage} from "../../models/system-language";

export const getLanguages = createAction('GET ALL LANGUAGES');

export const getLanguagesFail = createAction('GET ALL LANGUAGES FAIL',
  props<{ payload: any }>());

export const getLanguagesSuccess = createAction('GET ALL LANGUAGES SUCCESS',
  props<{ payload: SystemLanguage[] }>());


export const selectLanguage = createAction('SELECT LANGUAGE',
  props<{ payload: SystemLanguage }>());
