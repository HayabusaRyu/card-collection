import {Component, model, output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  standalone: true,
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  search = model<string> ('initial');

  searchButtonClicked = output({alias:'submit'});

  searchClick(){
    this.searchButtonClicked.emit();
  }

}
