import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private httpRequests = 0;
  private imagesLoading = 0;
  private routeNavigations = 0;
  private showSpinnerSubject = new BehaviorSubject<boolean>(false);
  showSpinner$ = this.showSpinnerSubject.asObservable();

  incrementHttp() {
    this.httpRequests++;
    this.updateSpinnerState();
  }

  decrementHttp() {
    this.httpRequests = Math.max(0, this.httpRequests - 1);
    this.updateSpinnerState();
  }

  incrementImage() {
    this.imagesLoading++;
    this.updateSpinnerState();
  }

  decrementImage() {
    this.imagesLoading = Math.max(0, this.imagesLoading - 1);
    this.updateSpinnerState();
  }

  incrementRoute() {
    this.routeNavigations++;
    this.updateSpinnerState();
  }

  decrementRoute() {
    this.routeNavigations = Math.max(0, this.routeNavigations - 1);
    this.updateSpinnerState();
  }

  private updateSpinnerState() {
    const isLoading = this.httpRequests > 0 || this.imagesLoading > 0 || this.routeNavigations > 0;
    this.showSpinnerSubject.next(isLoading);
  }
}
