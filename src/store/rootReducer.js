import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import infoReducer from './infoReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const rootReducer = combineReducers({
  info: infoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))