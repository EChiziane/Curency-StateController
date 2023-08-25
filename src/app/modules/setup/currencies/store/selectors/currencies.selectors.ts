import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromCurrencies  from "../reducers/currencies.reducer"
import {ICurrencyState} from "../reducers/currencies.reducer";

export const CURRENCY_STATE_NAME='currency'

export  const  setupState= createFeatureSelector<ICurrencyState>(CURRENCY_STATE_NAME);

export const  selectCurrencyIsLoading = createSelector(
  setupState,
  state=>state.isLoading
);

export  const  selectCurrencies= createSelector(
  setupState,
  fromCurrencies.selectAllCurrencies
);
