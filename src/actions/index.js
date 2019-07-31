import {
    FETCH_EARTHQUAKES,
    FILTER_BY_MAGNITUDE,
    FILTER_BY_MAGTYPE,
    RESET_FILTERS
} from './types'

// export const fetchEarthquakePending = () => ({
//     type: EARTHQUAKES_FETCH_PENDING
// })

// export const fetchEarthquakeSuccess = (earthquakes) => ({
//     type: EARTHQUAKES_FETCH_SUCCESS,
//     earthquakes
// })

// export const fetchEarthquakeError = (error) => ({
//     type: EARTHQUAKES_FETCH_ERROR,
//     error
// })

export const fetchEarthquakes = () => {
    const request = fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
    return {
        type: FETCH_EARTHQUAKES,
        payload: request
    }
}

export const filterByMagnitude = (id) => {
    return {
        type: FILTER_BY_MAGNITUDE,
        payload: id
    }
}

export const filterByMagtype = (id) => {
    return {
        type: FILTER_BY_MAGTYPE,
        payload: id
    }
}

export const resetFilters = () => {
    const request = fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
    return {
        type: RESET_FILTERS,
        payload: request
    }
}
