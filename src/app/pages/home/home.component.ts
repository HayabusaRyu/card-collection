import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

type HoverState = 'none' | 'pokemon' | 'yugioh'

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  hoverState: HoverState = 'none';
  private pokemonHoverSound = new Audio('/sounds/pokemon/pokemon-theme.mp3');
  private pokemonClickSound = new Audio('/sounds/pokemon/pokemon-validation.mp3');
  private yugiohHoverSound = new Audio('/sounds/yugioh/yugioh-theme.mp3');
  private yugiohClickSound = new Audio('/sounds/yugioh/its-time-to-duel.mp3');

  constructor(private router: Router) {
    this.pokemonHoverSound.loop = true;
    this.yugiohHoverSound.loop = true;

    // Set volumes (adjust as needed)
    [this.pokemonHoverSound, this.yugiohHoverSound].forEach(s => s.volume = 0.4);
    [this.pokemonClickSound, this.yugiohClickSound].forEach(s => s.volume = 0.7);
  }

  ngOnInit() {
    [
      this.pokemonHoverSound,
      this.pokemonClickSound,
      this.yugiohHoverSound,
      this.yugiohClickSound
    ].forEach(sound => sound.load());
  }

  onHover(state : HoverState) {
    this.hoverState = state;
    this.stopAllHoverSounds();

    if (state === 'pokemon') {
      this.pokemonHoverSound.play();
    } else if (state === 'yugioh') {
      this.yugiohHoverSound.play();
    }
  }

  onLeave(){
    this.hoverState = 'none';
    this.stopAllHoverSounds();
  }

  navigateTo(collection: string){
    this.router.navigate([`/${collection}`]);
    this.stopAllHoverSounds();

    if (collection === 'pokemon') {
      this.pokemonClickSound.play();
    } else {
      this.yugiohClickSound.play();
    }

    // Navigate after sound starts playing
    setTimeout(() => {
      this.router.navigate([`/${collection}`]);
    }, 300);
  }


  private stopAllHoverSounds() {
    this.pokemonHoverSound.pause();
    this.pokemonHoverSound.currentTime = 0;
    this.yugiohHoverSound.pause();
    this.yugiohHoverSound.currentTime = 0;
  }

}
