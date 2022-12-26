import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreObject } from 'src/app/store/reducer/store.reducer';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  store$!: Observable<StoreObject>;
  constructor(private store: Store<{store: StoreObject}>) {
    this.store$ = store.select('store');
  }
  
  buttonOnClick() {

  }

}
