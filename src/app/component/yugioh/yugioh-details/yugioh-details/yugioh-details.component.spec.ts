import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YugiohDetailsComponent } from './yugioh-details.component';

describe('YugiohDetailsComponent', () => {
  let component: YugiohDetailsComponent;
  let fixture: ComponentFixture<YugiohDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YugiohDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YugiohDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
