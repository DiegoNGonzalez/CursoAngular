import { Component} from '@angular/core';

@Component({
  selector: 'gift-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control" placeholder="Buscar gifts...">
  `
})

export class SearchBoxComponent {
  constructor() { }


}
