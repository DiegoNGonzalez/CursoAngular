import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  public title:string = 'First angular app';
  public counter:number=10;

  add1(value:number):void{
    this.counter +=value;
  }
  resetCounter():void{
    this.counter=10;
  }
}
