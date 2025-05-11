import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {RouteBackgroundService} from './services/route-background.service';
import {MatButton, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbar,
    MatIconButton,
    MatIcon],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(routeBackground : RouteBackgroundService) {}

  private router = inject(Router);


  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateHome(){
    this.router.navigate(['home'])
  }
}
