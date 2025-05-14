import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {SpinnerService} from '../services/spinner.service';
import {finalize} from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const spinnerService = inject(SpinnerService);
  spinnerService.incrementHttp();
  return next(req).pipe(
    finalize(() => spinnerService.decrementHttp())
  );
};


