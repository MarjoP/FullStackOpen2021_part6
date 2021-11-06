import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    notification: notificationReducer,
    anecdote: anecdoteReducer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store