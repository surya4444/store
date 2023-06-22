import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from 'src/app/storeState/counter.selector';
import { CounterState } from 'src/app/storeState/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterState }>) {}
  counter: number | undefined;

  ngOnInit(): void {
    this.store
      .select(getCounter)
      .subscribe((counter) => (this.counter = counter));
  }

  // @Input() counter: number = 0;
}
