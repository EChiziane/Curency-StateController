import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {select, Store} from "@ngrx/store";
import {IAppState} from "../store/reducers";
import {selectSelectedLanguage} from "../store/selectors/language.selectors";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private store: Store<IAppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    let customRequest: any;
    this.store.pipe(select(selectSelectedLanguage)).subscribe(lang => {
         customRequest = req.clone({
          headers: req.headers.set('Authorization', token ? `Bearer ${token}` : '').set('Accept-Language', lang ? lang.code : 'en-US')
        });

    });

    return next.handle(customRequest).pipe(
      tap((event: HttpEvent<any>) => {
        // TODO: Do something with success response
      }, (error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.auth.logout(true);
          }
        }
      })
    );

  }
}
