import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter: {{counter}}
</h3>
<button (click)="add1(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="add1(-1)"> -1 </button>


  `
})

export class CounterComponent  {
  public counter:number=10;
  constructor() { }
  add1(value:number):void{
    this.counter +=value;
  }
  resetCounter():void{
    this.counter=10;
  }

}
