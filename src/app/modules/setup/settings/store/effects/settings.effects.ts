import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ApiService} from "../../../../../services/api.service";
import {
  addSetting,
  addSettingFail,
  addSettingSuccess,
  deleteSetting,
  deleteSettingFail,
  deleteSettingSuccess,
  getSettingById,
  getSettingByIdFail,
  getSettingByIdSuccess,
  getSettings,
  getSettingsFail,
  getSettingsSuccess, updateSetting, updateSettingFail, updateSettingSuccess
} from "../actions/settings.actions";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Setting} from "../../../../../models/setting";
import {tap} from "rxjs/operators";


@Injectable()
export class SettingsEffects {
  constructor(private http: HttpClient, private actions$: Actions, private apiService: ApiService) {
  }

  loadAllSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSettings),
      exhaustMap((action) =>
        this.apiService.get<Setting[]>('/setting').pipe(
          map((settings) => getSettingsSuccess({ payload: settings })),
          catchError((error) => of(getSettingsFail({ payload: error })))
        )
      )
    )
  );

  getSettingById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSettingById),
      exhaustMap((action) =>
        this.apiService.get<Setting>('/setting' + action.payload).pipe(
          map((settings) => getSettingByIdSuccess({ payload: settings })),
          catchError((error) => of(getSettingByIdFail({ payload: error })))
        )
      )
    )
  );

  addSetting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSetting),
      exhaustMap((action) =>
        this.apiService.post<Setting>('/setting',  {key: action.payload.key, value: action.payload.value}).pipe(
          map((category) => addSettingSuccess({ payload: category })),
          catchError((error) => of(addSettingFail({ payload: error })))
        )
      )
    )
  );

  addSettingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSettingSuccess),
      map(action => action.payload),
      tap((authDetails) => {
        // TODO: Give feedback to user
        // alert('Added with success');
      })
    ), {dispatch : false}
  );

  addSettingFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSettingFail),
      map(action => action.payload),
      tap((error) => {
        // TODO: Give feedback to user
        // alert('Error');
      })
    ), {dispatch : false}
  );

  deleteSetting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSetting),
      exhaustMap((action) =>
        this.apiService.delete<Setting>('/setting' + action.payload).pipe(
          map((setting) => deleteSettingSuccess({ payload: setting })),
          catchError((error) => of(deleteSettingFail({ payload: error })))
        )
      )
    )
  );

  deleteSettingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSettingSuccess),
      map(action => action.payload),
      tap((authDetails) => {
        // TODO: Give feedback to user
      })
    ), {dispatch : false}
  );

  deleteSettingFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSettingFail),
      map(action => action.payload),
      tap((error) => {
        // TODO: Give feedback to user
      })
    ), {dispatch : false}
  );

  updateSetting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSetting),
      exhaustMap((action) =>
        this.apiService.put<Setting>('/setting' + action.payload.id, action.payload).pipe(
          map((setting) => updateSettingSuccess({ payload: setting })),
          catchError((error) => of(updateSettingFail({ payload: error })))
        )
      )
    )
  );

  updateSettingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSettingSuccess),
      map(action => action.payload),
      tap((authDetails) => {
        // TODO: Give feedback to user
      })
    ), {dispatch : false}
  );

  updateSettingFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSettingFail),
      map(action => action.payload),
      tap((error) => {
        // TODO: Give feedback to user
      })
    ), {dispatch : false}
  );
}
