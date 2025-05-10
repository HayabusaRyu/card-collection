import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingYugiohCardComponent } from './playing-yugioh-card.component';

describe('PlayingYugiohCardComponent', () => {
  let component: PlayingYugiohCardComponent;
  let fixture: ComponentFixture<PlayingYugiohCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingYugiohCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingYugiohCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
