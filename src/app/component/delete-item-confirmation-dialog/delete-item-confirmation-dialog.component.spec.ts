import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemConfirmationDialogComponent } from './delete-item-confirmation-dialog.component';

describe('DeleteItemConfirmationDialogComponent', () => {
  let component: DeleteItemConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteItemConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteItemConfirmationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteItemConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
