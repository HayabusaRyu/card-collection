import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {SpinnerService} from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class RouteBackgroundService {

  private backgroundMapping: { prefix: string; image: string }[] = [
    { prefix: '/pokemon', image: '/images/logos/pokemon-wall.png' },
    { prefix: '/yugioh', image: '/images/logos/yugioh-wall.png' }
  ];

  constructor(private router: Router, private spinnerService: SpinnerService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBackground(event.urlAfterRedirects);
      }
    });
  }

  private updateBackground(url: string): void {
    const match = this.backgroundMapping.find(({ prefix }) => url.startsWith(prefix));
    const backgroundUrl = match ? match.image : '';

    if (backgroundUrl) {
      this.spinnerService.incrementImage();
      const img = new Image();
      img.onload = () => {
        document.documentElement.style.setProperty('--route-bg-image', `url(${backgroundUrl})`);
        this.spinnerService.decrementImage();
      };
      img.onerror = () => this.spinnerService.decrementImage();
      img.src = backgroundUrl;
    } else {
      document.documentElement.style.setProperty('--route-bg-image', '');
    }
  }
}
