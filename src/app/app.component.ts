import {Component, inject, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {RouteBackgroundService} from './services/route-background.service';
import {MatButton, MatIconButton} from '@angular/material/button';
import {SpinnerService} from './services/spinner.service';
import {SpinnerComponent} from './component/spinner/spinner.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SpinnerComponent,
    MatToolbar,
    MatIconButton,
    MatIcon],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  private router = inject(Router);
  private spinnerService = inject(SpinnerService);

  constructor(routeBackground : RouteBackgroundService) {}



  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.spinnerService.incrementRoute();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.spinnerService.decrementRoute();
      }
    });
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateHome(){
    this.router.navigate(['home'])
  }
}
