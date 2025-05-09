import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingPokemonCardComponent } from './playing-pokemon-card.component';

describe('PlayingPokemonCardComponent', () => {
  let component: PlayingPokemonCardComponent;
  let fixture: ComponentFixture<PlayingPokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingPokemonCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingPokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
