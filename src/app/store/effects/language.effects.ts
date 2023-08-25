import {HttpClient} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {getLanguages, getLanguagesFail, getLanguagesSuccess} from "../actions/language.actions";
import {SystemLanguage} from "../../models/system-language";

@Injectable()
export class LanguageEffects {
  constructor(private http: HttpClient, private actions$: Actions, private apiService: ApiService) {
  }

  loadLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguages),
      exhaustMap((action) =>
        this.apiService.get<SystemLanguage[]>('/languages').pipe(
          map((languages) => getLanguagesSuccess({ payload: languages })),
          catchError((error) => of(getLanguagesFail({ payload: error })))
        )
      )
    )
  );
}
