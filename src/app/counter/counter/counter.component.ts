import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // counter: number = 0;
  // onIncrement() {
  //   this.counter++;
  // }

  // onDecrement() {
  //   this.counter--;
  // }

  // onReset() {
  //   this.counter = 0;
  // }
}
