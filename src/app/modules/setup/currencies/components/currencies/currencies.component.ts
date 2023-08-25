import {Component, Input, OnInit} from '@angular/core';
import {ICurrencyState} from "../../store/reducers/currencies.reducer";
import {select, Store} from "@ngrx/store";
import {selectSettingIsLoading} from "../../../settings/store/selectors/settings.selectors";
import {selectCurrencies} from "../../store/selectors/currencies.selectors";
import {getCurrencies} from "../../store/actions/currencies.actions";

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
isLoading=this.store.pipe(select(selectSettingIsLoading));
currencies$=this.store.pipe(select(selectCurrencies));
  constructor(private store:Store<ICurrencyState>) { }

  ngOnInit(): void {
    this.store.dispatch(getCurrencies());
  }

}
