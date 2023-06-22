import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { custumInput } from 'src/app/storeState/counter.action';
import { CounterState } from 'src/app/storeState/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
})
export class CounterInputComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {}

  value!: number;

  onAdd() {
    this.store.dispatch(custumInput({ value: this.value }));
  }
}
