import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {
  PlayingYugiohCardComponent
} from '../../../component/playing-card/yugioh/playing-yugioh-card/playing-yugioh-card.component';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {YugiohService} from '../../../services/yugioh.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {YugiohCard} from '../../../models/yugioh.model';
import {CardType, SpellTrapType, TrapType, YugiohAttribute, YugiohRace} from '../../../utils/yugioh.utils';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {Subscription} from 'rxjs';
import {
  DeleteItemConfirmationDialogComponent
} from '../../../component/delete-item-confirmation-dialog/delete-item-confirmation-dialog.component';
import {MatDialog} from '@angular/material/dialog';

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
  private readonly dialog = inject(MatDialog);

  private routeSubscription: Subscription | null = null;
  private formValuesSubscription: Subscription | null = null;

  card: YugiohCard = new YugiohCard();
  monsterAttributes = Object.values(YugiohAttribute);
  monsterRace = Object.values(YugiohRace);
  cardTypes = Object.values(CardType);
  spellTypes = Object.values(SpellTrapType);
  trapTypes = Object.values(TrapType);
  cardId = -1;


  formGroup = this.fb.group({
    cardType: [CardType.MONSTER, Validators.required],
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: [''],

    // Monster-specific
    attribute: [YugiohAttribute.DARK],
    level: [1 as number | null, [Validators.min(1), Validators.max(12)]],
    atk: [0 as number | null, [Validators.min(0)]],
    def: [0 as number | null, [Validators.min(0)]],
    monsterType: [YugiohRace.SPELLCASTER],

    // Spell/Trap-specific
    spellTrapType: [SpellTrapType.NORMAL],
    trapType: [TrapType.NORMAL],
    effectText: ['']
  });

  ngOnInit(): void {
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(data => {
      this.card = Object.assign(new YugiohCard(), data)
    });
    this.formGroup.get('cardType')?.valueChanges.subscribe(type => {
      this.cardTypeChange(type as CardType);
    });
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

  private cardTypeChange(newType: CardType) {
    const monsterDefaults = {
      attribute: YugiohAttribute.DARK,
      level: 1,
      atk: 0,
      def: 0,
      monsterType: null,
      spellTrapType: null,
      trapType: null,
      effectText: ''
    };

    const spellTrapDefaults = {
      attribute: null,
      level: null,
      atk: null,
      def: null,
      monsterType: null,
      effectText: ''
    };

    if (newType === CardType.MONSTER) {
      this.formGroup.patchValue(monsterDefaults as unknown as Partial<{ [K in keyof YugiohCard]: any }>);
    }
    else if (newType === CardType.SPELL) {
      this.formGroup.patchValue({
        ...spellTrapDefaults,
        spellTrapType: SpellTrapType.NORMAL,
        trapType: null
      } as unknown as Partial<{ [K in keyof YugiohCard]: any }>);
    }
    else if (newType === CardType.TRAP) {
      this.formGroup.patchValue({
        ...spellTrapDefaults,
        trapType: TrapType.NORMAL,
        spellTrapType: null
      } as unknown as Partial<{ [K in keyof YugiohCard]: any }>);
    }

    this.formGroup.markAsUntouched();
    this.formGroup.markAsPristine();
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.formValuesSubscription?.unsubscribe();
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

  deleteMonster(){
    const dialogRef = this.dialog.open(DeleteItemConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(confirmation => {
      if(confirmation){
        this.yugiohService.delete(this.cardId);
        this.navigateBack();
      }
    })
  }

  protected readonly CardType = CardType;
}
