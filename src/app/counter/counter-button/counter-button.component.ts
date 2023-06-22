import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/storeState/counter.action';
import { CounterState } from 'src/app/storeState/counter.state';
@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss'],
})
export class CounterButtonComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {}

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();
  onIncrement() {
    // this.increment.emit();
    this.store.dispatch(increment());
  }

  onDecrement() {
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }

  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }
}
