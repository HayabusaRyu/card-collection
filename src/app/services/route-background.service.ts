import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteBackgroundService {

  private backgroundMapping: { [key: string]: string } = {
    '/pokemon': '/images/logos/pokemon-wall.png',
    '/yugioh': '/images/logos/yugioh-wall.png'
  };

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBackground(event.url);
      }
    });
  }

  private updateBackground(url: string): void {
    const backgroundUrl = this.backgroundMapping[url] || '';
    document.documentElement.style.setProperty('--route-bg-image', `url(${backgroundUrl})`);
  }
}
