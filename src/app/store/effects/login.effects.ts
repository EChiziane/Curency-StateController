import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Actions, createEffect, Effect, ofType, ROOT_EFFECTS_INIT} from "@ngrx/effects";
import {catchError, defer, exhaustMap, map, of, switchMap} from "rxjs";
import {login, loginFail, loginSuccess} from "../actions/login.actions";
import {ApiService} from "../../services/api.service";
import {LoginResponse} from "../../models/login-credential";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class LoginEffects {
  constructor(private http: HttpClient, private actions$: Actions,private apiService: ApiService,
              private router: Router, private auth: AuthService, private translate: TranslateService) {
  }

  doLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.apiService.post<LoginResponse>('/account/login', action.payload).pipe(
          map((response) => loginSuccess({ payload: response })),
          catchError((error) => of(loginFail({ payload: error })))
        )
      )
    )
  );

  doLoginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      map(action => action.payload),
      tap((authDetails) => {
        localStorage.setItem('token', authDetails.token);
        localStorage.setItem('user', JSON.stringify(authDetails));
        localStorage.setItem('email', authDetails.email);
        localStorage.setItem('fullName', authDetails.fullName);
        this.router.navigateByUrl('/home');

      })
    ), {dispatch : false}
  );

  doLoginFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginFail),
      map(action => action.payload),
      tap((error) => {
        //TODO:
       alert('Login failed');
      })
    ), {dispatch : false}
  );

}
