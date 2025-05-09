import {Component, computed, inject, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  PlayingPokemonCardComponent
} from '../../../component/playing-card/pokemon/playing-pokemon-card/playing-pokemon-card.component';
import {ActivatedRoute, Router} from '@angular/router';
import {of, Subscription} from 'rxjs';
import {PokemonService} from '../../../services/pokemon.service';
import {PokemonType} from '../../../utils/pokemon.utils';
import {Pokemon} from '../../../models/pokemon.model';
import {AttackType} from '../../../utils/pokemon-attack.utils';


@Component({
  selector: 'app-pokemon-details',
  imports: [
    ReactiveFormsModule,
    PlayingPokemonCardComponent
  ],
  templateUrl: './pokemon-details.component.html',
  standalone: true,
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit, OnDestroy{


  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private pokemonService = inject(PokemonService);

  private routeSubscription: Subscription | null = null;
  private formValuesSubscription: Subscription | null = null;


  formGroup = this.fb.group({
    name: ['', [Validators.required]],
    image: ['', [Validators.required]],
    type: [PokemonType.ELECTRIC, [Validators.required]],
    hp: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    figureCaption: ['', [Validators.required]],
    attacks: this.fb.array([])
  });

  pokemon: Pokemon = new Pokemon();
  pokemonTypes = Object.values(PokemonType);
  attackTypes = Object.values(AttackType);
  pokemonId = -1;


  ngOnInit(): void {
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(data => {
      this.pokemon = Object.assign(new Pokemon(), data)
    })
    this.routeSubscription = this.route.params.subscribe(params => {
      if(params['id']) {
        this.pokemonId = parseInt(params['id']);
        const monsterFound = this.pokemonService.get(this.pokemonId);
        if(monsterFound){
          this.pokemon = monsterFound;
          this.formGroup.patchValue(this.pokemon);
          monsterFound.attacks.forEach((atk) =>{
            this.attacks.push(
              this.fb.group({
                name:[atk.name, Validators.required],
                type:[atk.type, Validators.required],
                description:[atk.description, Validators.required],
                power:[atk.power],
              })
            )
          })
        }
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.formValuesSubscription?.unsubscribe();
  }

  navigateBack(){
    this.router.navigate(['/home']);
  }

  submit(event: Event){
    event.preventDefault();
    if(this.pokemonId === -1) {
      this.pokemonService.add(this.pokemon);
    } else {
      this.pokemon.id = this.pokemonId;
      this.pokemonService.update(this.pokemon);
    }
    this.navigateBack();
  }

  isFieldValid(name: string){
    const formControl = this.formGroup.get(name);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched);
  }

  onFileChange(event: any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result as string
        })
      }
    }
  }

  get attacks(): FormArray {
    return this.formGroup.get('attacks') as FormArray;
  }


}
