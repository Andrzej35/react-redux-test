import { FETCH_EARTHQUAKES, FILTER_BY_MAGNITUDE, FILTER_BY_MAGTYPE, RESET_FILTERS } from '../actions/types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EARTHQUAKES:
            return [...state, ...action.payload.features]
        case FILTER_BY_MAGNITUDE:
            return filterState(state, action, 'mag')
        case FILTER_BY_MAGTYPE:
            return filterState(state, action, 'magType')
        case RESET_FILTERS:
            return [...state, ...action.payload.features]
        default:
            return state
    }
}

const filterState = (store, action, key) => store.filter(item => item.properties[key] === action.payload)
