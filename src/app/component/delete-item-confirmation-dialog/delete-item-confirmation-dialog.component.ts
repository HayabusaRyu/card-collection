import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-item-confirmation-dialog',
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatDialogTitle,
    MatButtonModule],
  templateUrl: './delete-item-confirmation-dialog.component.html',
  standalone: true,
  styleUrl: './delete-item-confirmation-dialog.component.scss'
})
export class DeleteItemConfirmationDialogComponent {

}
