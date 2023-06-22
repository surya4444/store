import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from 'src/app/storeState/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {}

  // @Input() counter: number = 0;
  counter = this.store.select('counter').subscribe((data) => data.counter);
}
