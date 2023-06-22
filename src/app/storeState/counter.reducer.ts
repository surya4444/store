import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  changeName,
  custumInput,
  decrement,
  increment,
  reset,
} from './counter.action';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state, action) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state, action) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(custumInput, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeName, (state, action) => {
    return {
      ...state,
      name: 'lokesh',
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
