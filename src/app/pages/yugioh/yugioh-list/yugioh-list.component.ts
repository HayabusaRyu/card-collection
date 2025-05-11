import {Component, computed, inject, model, signal} from '@angular/core';
import {YugiohService} from '../../../services/yugioh.service';
import {Router} from '@angular/router';
import {
  PlayingYugiohCardComponent
} from '../../../component/playing-card/yugioh/playing-yugioh-card/playing-yugioh-card.component';
import {SearchBarComponent} from '../../../component/search-bar/search-bar.component';
import {
  PlayingPokemonCardComponent
} from '../../../component/playing-card/pokemon/playing-pokemon-card/playing-pokemon-card.component';
import {PokemonService} from '../../../services/pokemon.service';
import {Pokemon} from '../../../models/pokemon.model';
import {YugiohCard} from '../../../models/yugioh.model';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-yugioh-list',
  imports: [
    PlayingYugiohCardComponent,
    SearchBarComponent,
    MatButton
  ],
  templateUrl: './yugioh-list.component.html',
  standalone: true,
  styleUrl: './yugioh-list.component.scss'
})
export class YugiohListComponent {

  private router = inject(Router);
  private yugiohService = inject(YugiohService);

  cards = signal<YugiohCard[]>([]);
  search = model('');

  filteredCards = computed(() => {
    return this.cards().filter(card => card.name.includes(this.search()));
  })

  constructor() {
    this.cards.set(this.yugiohService.getAllCards());
  }

  addCard(){
    this.router.navigate(['yugioh/monster']);
  }

  openCard(card : YugiohCard) {
    this.router.navigate(['yugioh/monster', card.id]);
  }

}
