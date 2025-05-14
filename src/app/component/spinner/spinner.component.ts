import {Component, inject} from '@angular/core';
import {SpinnerService} from '../../services/spinner.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-spinner',
  imports: [
    MatProgressSpinnerModule,
    AsyncPipe
  ],
  templateUrl: './spinner.component.html',
  standalone: true,
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  isLoading$ = inject(SpinnerService).showSpinner$;
}
