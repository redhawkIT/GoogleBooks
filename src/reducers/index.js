import {combineReducers} from 'redux'
import ui from './UIReducer'
import books from './book.search.reducer'
import google from './googleAutoSuggest.reducer'

// Combines multiple reducers into a single reducing function with each reducer as a
// key/value pair. Can then be passed to createStore().
const rootReducer = combineReducers({ui, books, google})

export default rootReducer
