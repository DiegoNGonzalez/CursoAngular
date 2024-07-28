import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gift-card-list',
  templateUrl: 'card-list.component.html'
})

export class CardListComponent {
  constructor() { }


  @Input()
  public gifs:Gif[]=[];
}
