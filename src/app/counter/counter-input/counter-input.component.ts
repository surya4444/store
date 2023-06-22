import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, custumInput } from 'src/app/storeState/counter.action';
import { getName } from 'src/app/storeState/counter.selector';
import { CounterState } from 'src/app/storeState/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
})
export class CounterInputComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterState }>) {}

  name: string | undefined;
  value!: number;

  ngOnInit(): void {
    this.store.select(getName).subscribe((data) => (this.name = data));
  }

  onAdd() {
    this.store.dispatch(custumInput({ value: +this.value }));
  }
  changeName() {
    this.store.dispatch(changeName());
  }
}
