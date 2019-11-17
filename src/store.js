import { createStore, applyMiddleware, combineReducers} from 'redux'

import thunkMiddleware from 'redux-thunk'

import { listaTweetsReducer } from './ducks/listaTweets/listaTweets.js'

export const store = createStore(
    combineReducers({
        listaTweets: listaTweetsReducer
    }),
    applyMiddleware(
        thunkMiddleware
    )
)
