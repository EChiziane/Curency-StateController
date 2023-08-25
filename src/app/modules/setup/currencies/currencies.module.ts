import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {CURRENCY_STATE_NAME} from "./store/selectors/currencies.selectors";
import {currencyReducer} from "./store/reducers/currencies.reducer";
import {EffectsModule} from "@ngrx/effects";
import {currenciesEffects} from "./store/effects";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {GridModule} from "@syncfusion/ej2-angular-grids";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CurrenciesComponent } from './components/currencies/currencies.component';
import {CurrenciesRoutingModule} from "./currencies-routing.module";

export  function  createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/setup/','json');
}

@NgModule({
  declarations: [
    CurrenciesComponent
  ],
  imports: [
    CommonModule,
    CurrenciesRoutingModule,
    StoreModule.forFeature(CURRENCY_STATE_NAME, currencyReducer,{}),
    EffectsModule.forFeature(currenciesEffects),
    TranslateModule.forChild({
      loader:{
        provide:TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient],
      },
      defaultLanguage:'en',
      isolate:true,
      extend:true
    }),
    GridModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[]
})
export class CurrenciesModule { }
