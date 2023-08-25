import {createAction, props} from "@ngrx/store";
import {Currency} from "../../../../../models/currency";

export const getCurrencies=createAction('[CURRENCIES] GET ALL CURRENCY');
export const getCurrenciesFail=createAction('[CURRENCIES] GET ALL CURRENCY FAIL', props<{payload:any}>());
export const getCurrenciesSuccess=createAction('[CURRENCIES] GET ALL CURRENCY SUCCESS', props<{payload:Currency[]}>());

export const getCurrencyById=createAction('[CURRENCIES] GET CURRENCY BY ID',props<{ payload: number }>());
export const getCurrencyByIdFail=createAction('[CURRENCIES] GET CURRENCY BY ID FAIL',props<{ payload: any }>());
export const getCurrencyByIdSuccess=createAction('[CURRENCIES] GET CURRENCY BY ID FAIL',props<{ payload: Currency }>());

export const updateCurrency=createAction('[CURRENCIES] UPDATE CURRENCY',props<{ payload: number }>());
export const updateCurrencySuccess=createAction('[CURRENCIES] UPDATE CURRENCY SUCCESS',props<{ payload: Currency}>());
export const updateCurrencyFail=createAction('[CURRENCIES] UPDATE CURRENCY BY ID FAIL',props<{ payload: any }>());


export const addCurrency=createAction('[CURRENCIES] ADD CURRENCY',props<{ payload: Currency }>());
export const addCurrencyFail=createAction('[CURRENCIES] ADD CURRENCY FAIL',props<{ payload: any }>());
export const addCurrencySuccess=createAction('[CURRENCIES] ADD CURRENCY  SUCCESS',props<{ payload: Currency }>());

export const deleteCurrency=createAction('[CURRENCIES] DELETE CURRENCY',props<{ payload: number }>());
export const deleteCurrencyFail=createAction('[CURRENCIES] DELETE CURRENCY FAIL',props<{ payload: any }>());
export const deleteCurrencySuccess=createAction('[CURRENCIES] DELETE CURRENCY  SUCCESS',props<{ payload: Currency}>());
