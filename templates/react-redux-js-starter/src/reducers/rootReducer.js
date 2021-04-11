import { createReducer, combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

const initialState = {}

const rootReducer = createReducer(initialState, {})

export default history => combineReducers({
  router: connectRouter(history),
  app: rootReducer,
})
