import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ApiService} from "../../../../../services/api.service";
import {getCurrencies, getCurrenciesSuccess} from "../actions/currencies.actions";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Currency} from "../../../../../models/currency";
import {getSettingsFail} from "../../../settings/store/actions/settings.actions";

@Injectable()
export class CurrenciesEffects{
  constructor(private  http:HttpClient, private actions$:Actions , private  apiService:ApiService) {
  }

  loadAllCurrencies$=createEffect(()=>
    this.actions$.pipe(
      ofType(getCurrencies),
      exhaustMap((action)=>
      this.apiService.get<Currency[]>('/currency').pipe(
        map((currency)=>getCurrenciesSuccess({payload:currency})),
        catchError((error)=>of(getSettingsFail({payload:error})))
      ))
    )

  );
}
