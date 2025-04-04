import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
counter: number = 0;

constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
ngOninit(): void {
}


increaseBy(value: number) {
  this.counter+= value;
}
}
