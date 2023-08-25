import { Component, OnInit } from '@angular/core';
import {LoginCredential} from "../models/login-credential";
import {select, Store} from "@ngrx/store";
import {IAppState} from "../store/reducers";
import {login} from "../store/actions/login.actions";
import {getLanguages} from "../store/actions/language.actions";
import {selectAllLanguages} from "../store/selectors/language.selectors";
import {FieldSettingsModel} from "@syncfusion/ej2-angular-dropdowns";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginCredentials: LoginCredential = new LoginCredential('admin@cmms.com', 'Pa$$w0rd1');
  param = {value: 'world'};
  languages$ = this.store.pipe(select(selectAllLanguages));
  languages: any[] = [];
  public fields: FieldSettingsModel = { text: 'name', value: 'id' };

  constructor(private store: Store<IAppState>, private translate: TranslateService) { }

  ngOnInit(): void {
    this.store.dispatch(getLanguages());

    this.languages$.subscribe(langs => {
      if (langs) {
        this.languages = langs
      }
    })
  }

  onLogin() {
    this.store.dispatch(login({payload: this.loginCredentials}))

  }

  onSelectLanguage(event: any) {
    const selectedLang = this.languages.find(x => x.id === event);

    if (selectedLang) {
      this.translate.use(selectedLang.frontEndCode);

    }
  }
}
