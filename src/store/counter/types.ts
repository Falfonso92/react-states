import { Action } from "redux"

export const ADD_COUNTER = 'ADD_COUNTER'
export const ADD_SECOND_COUNTER = 'ADD_SECOND_COUNTER'

export interface CounterState {
    count: number;
    secondCount: number;
}


interface AddCounterAction extends Action<typeof ADD_COUNTER> {
  type: typeof ADD_COUNTER;
}

interface AddSecondCounterAction extends Action<typeof ADD_SECOND_COUNTER>{
  type: typeof ADD_SECOND_COUNTER
}

export type CounterActionTypes = AddCounterAction | AddSecondCounterAction