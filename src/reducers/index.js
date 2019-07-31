import { combineReducers } from 'redux'
import earthquakeReducer from './earthquake'

const rootReducer = combineReducers({
    earthquakes: earthquakeReducer
})

export default rootReducer
