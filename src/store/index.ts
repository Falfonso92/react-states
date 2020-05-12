
import { counterReducer } from './counter/reducers'
import { CounterState } from './counter/types';
import { combineReducers } from 'redux';

export interface AppState {
  readonly counterState : CounterState
}

export const appReducer = combineReducers<AppState>({
  counterState : counterReducer as any
});

