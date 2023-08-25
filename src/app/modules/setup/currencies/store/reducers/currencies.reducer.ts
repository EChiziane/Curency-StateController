import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {Currency} from "../../../../../models/currency";
import {Action, createReducer, on} from "@ngrx/store";
import {getCurrencies,
  getCurrenciesFail,
  getCurrenciesSuccess} from "../actions/currencies.actions";


export interface ICurrencyState extends  EntityState<Currency>{
  selectedCurrencyId: number | null;
  isLoading: boolean;
  isSaving: boolean;
  errorMessage: string;
  successMessage: string;
  errors: any;
  selectedCurrency:Currency|null;
}
export  const  adapter:EntityAdapter<Currency>= createEntityAdapter<Currency>();
export  const initialState: ICurrencyState=adapter.getInitialState({
  selectedCurrencyId: null,
  isLoading: false,
  isSaving: false,
  errorMessage: '',
  errors:null,
  successMessage:'',
  selectedCurrency:null
});
const reducer=createReducer(
  initialState,
  on(getCurrencies, (state) => {
    return {...state, isLoading:true};
  }),
  on(getCurrenciesSuccess, (state,{payload})=>{
    return adapter.setAll(payload,{...state, isLoading:false});
}),
  on(getCurrenciesFail, (state,{payload})=>{
  return {...state, errorMessage:payload, isLoading:false};}));

  export  function  currencyReducer(state:ICurrencyState|undefined,action:Action){
    return reducer(state,action);}
  export const getSelectedCurrenyId=(state:ICurrencyState)=> state.selectedCurrencyId;

  const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();

// select the array of Currencies ids
export const selectCurrenciesIds = selectIds;

// select the dictionary of Currency entities
export const selectCurrenciesEntities = selectEntities;

// select the array of Currency
export const selectAllCurrencies = selectAll;

// select the total Currencies count
export const selectCurrenciesTotal = selectTotal;

export const getErrors = (state: ICurrencyState) => state.errors;
export const getIsLoading = (state: ICurrencyState) => state.isLoading;
export const getSelectedCurrency = (state: ICurrencyState) => state.selectedCurrency;
