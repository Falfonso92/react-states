import {  ADD_COUNTER, ADD_SECOND_COUNTER, CounterActionTypes, CounterState } from './types'
import { Reducer } from 'react'

const initialState: CounterState = {
    count:0,
    secondCount: 0
}

export const counterReducer: Reducer<CounterState,CounterActionTypes> = (
    state = initialState,
    action: CounterActionTypes
) => {
    switch (action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                count: state.count + 1
            }
        case ADD_SECOND_COUNTER:
            return {
                ...state,
                secondCount: state.secondCount + 1
            }
        default:
            return state
    }
};