import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {  PlayingYugiohCardComponent } from '../../../component/playing-card/yugioh/playing-yugioh-card/playing-yugioh-card.component';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {YugiohService} from '../../../services/yugioh.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {YugiohCard} from '../../../models/yugioh.model';
import {Attribute, CardType, SpellTrapType} from '../../../utils/yugioh.utils';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {Pokemon} from '../../../models/pokemon.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-yugioh-details',
  imports: [
    PlayingYugiohCardComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './yugioh-details.component.html',
  standalone: true,
  styleUrl: './yugioh-details.component.scss'
})
export class YugiohDetailsComponent implements OnInit, OnDestroy{

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private yugiohService = inject(YugiohService);

  private routeSubscription: Subscription | null = null;
  private formValuesSubscription: Subscription | null = null;

  card: YugiohCard = new YugiohCard();
  monsterAttributes = Object.values(Attribute);
  cardTypes = Object.values(CardType);
  spellTypes = Object.values(SpellTrapType);
  cardId = -1;


  formGroup = this.fb.group({
    cardType: [CardType.MONSTER, Validators.required],
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: [''],

    // Monster-specific
    attribute: [null as Attribute | null],
    level: [0, [Validators.min(1), Validators.max(12)]],
    atk: [0, Validators.min(0)],
    def: [0, Validators.min(0)],
    monsterType: [''],

    // Spell/Trap-specific
    spellTrapType: [null as SpellTrapType | null],
    effectText: ['']
  });

  ngOnInit(): void {
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(data => {
      this.card = Object.assign(new YugiohCard(), data)
    })
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.cardId = parseInt(params['id']);
        const cardFound = this.yugiohService.get(this.cardId);
        if(cardFound){
          this.card = cardFound;
          this.formGroup.patchValue(this.card);
        }
      }
    });
  }

  ngOnDestroy() {
  }


  submit(event: Event){
    event.preventDefault();
    if(this.cardId === -1) {
      this.yugiohService.add(this.card);
    } else {
      this.card.id = this.cardId;
      this.yugiohService.update(this.card);
    }
    this.navigateBack();
  }

  navigateBack(){
    this.router.navigate(['yugioh']);
  }

  isFieldInvalid(name: string){
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
          imageUrl: reader.result as string
        })
      }
    }
  }

  protected readonly CardType = CardType;
  protected readonly Attribute = Attribute;
}
