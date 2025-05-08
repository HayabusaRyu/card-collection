import {Injectable, signal} from '@angular/core';
import {BaseCard} from '../models/yugioh.model';

@Injectable({
  providedIn: 'root'
})
export class YugiohService {

  cards = signal<BaseCard[]>([]);

  getById(id: number) {
    return this.cards().find(p => p.id === id);
  }

  update(pokemon: Partial<BaseCard>) {
    // Update logic
  }

  delete(id: number) {
    this.cards.update(list => list.filter(p => p.id !== id));
  }
}
