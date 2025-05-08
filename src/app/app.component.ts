import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatIcon],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private router = inject(Router);


  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateHome(){
    this.router.navigate(['home'])
  }
}
