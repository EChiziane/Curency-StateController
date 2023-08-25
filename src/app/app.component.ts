import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {IAppState} from "./store/reducers";
import {selectAllLanguages, selectSelectedLanguage} from "./store/selectors/language.selectors";
import {getLanguages, selectLanguage} from "./store/actions/language.actions";
import {SystemLanguage} from "./models/system-language";
import {selectLoginName} from "./store/selectors/login.selectors";
import {TranslateService} from "@ngx-translate/core";
import {loginSuccess} from "./store/actions/login.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  languages$ = this.store.pipe(select(selectAllLanguages));
  selectedLanguage$ = this.store.pipe(select(selectSelectedLanguage));
  loggedInUser$ = this.store.pipe(select(selectLoginName));

   test = 'APP_COMPONENT.ADMIN';

  constructor(public auth: AuthService,
              private router: Router,
              private store: Store<IAppState>,
              private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
  }
  ngOnInit() {
    if (!this.auth.isAuthenticated()){
      this.router.navigateByUrl('/login');
    }

    const user = localStorage.getItem('user');
    if (user) {
      const userObj = JSON.parse(user);
      this.store.dispatch(loginSuccess({payload: userObj}));
    }

    this.store.dispatch(getLanguages());

    this.selectedLanguage$.subscribe(lang => {
      if (lang) {
        // console.log(lang);
        this.translate.use(lang.frontEndCode);
      }
    })

  }

  onSelectLanguage(language: SystemLanguage) {
    this.store.dispatch(selectLanguage({payload: language}));
  }
}
