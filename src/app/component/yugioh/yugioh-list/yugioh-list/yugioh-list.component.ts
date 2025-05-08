import {Component, inject} from '@angular/core';
import {YugiohService} from '../../../../services/yugioh.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-yugioh-list',
  imports: [],
  templateUrl: './yugioh-list.component.html',
  standalone: true,
  styleUrl: './yugioh-list.component.scss'
})
export class YugiohListComponent {

  private router = inject(Router);
  private yugiohService = inject(YugiohService);

  cards = this.yugiohService.cards;

  viewDetails(id: number) {
    this.router.navigate([`/yugioh/card/${id}`]);
  }
}
