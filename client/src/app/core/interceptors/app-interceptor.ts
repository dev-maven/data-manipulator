import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { decrementLoader, incrementLoader } from '../store';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private store: Store<any>, public snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const spinner = req.params.get('spinner');
    if (spinner && spinner === 'no') {
      req.params.delete('spinner');
      return next.handle(req);
    }
    this.store.dispatch(incrementLoader());

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.store.dispatch(decrementLoader());
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        const started = Date.now();
        const elapsed = Date.now() - started;
        console.log(
          `Request for ${req.urlWithParams} failed after ${elapsed} ms.`
        );
        // debugger;
        this.store.dispatch(decrementLoader());
        this.snackBar.open(error.message, '×', {
          panelClass: ['error-snackbar'],
          verticalPosition: 'top',
          duration: 3000,
        });
        return throwError(error);
      })
    );
  }
}
