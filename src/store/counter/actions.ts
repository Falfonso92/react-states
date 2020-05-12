import {  ADD_COUNTER, ADD_SECOND_COUNTER, CounterActionTypes } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function addCounter(): CounterActionTypes {
  return {
    type: ADD_COUNTER
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function addSecondCounter(): CounterActionTypes {
  return {
    type: ADD_SECOND_COUNTER
  }
}