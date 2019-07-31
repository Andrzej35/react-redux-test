import React from 'react'
import './App.css'

import FilterMagnitude from './FilterMagnitude'
import ClearFilters from './ClearFilters'
import Earthquakes from './Earthquakes'
import FilterMagType from './FilterMagType'


const App = () => (
    <div className="container">
        <div className="app">
            <ClearFilters />
            <FilterMagnitude />
            <FilterMagType />
            <Earthquakes />
        </div>
    </div>)

export default App
