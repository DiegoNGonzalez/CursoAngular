import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
    selector: 'share-sidebard',
    templateUrl: './sidebard.component.html',
    styleUrl: './sidebard.component.css',

})
export class SidebardComponent {
  constructor(private giftService:GifsService){}


  get tags(){
    return this.giftService.tagsHistoy;
  }

  research(tag:string):void{
    this.giftService.searchTag(tag);
  }
}
