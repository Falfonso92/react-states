import { Store, createStore } from 'redux'
import { AppState, appReducer } from './store'
export default function configureStore(initialState: AppState) {
    const store = createStore(appReducer, initialState);
    return store;
}