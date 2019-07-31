import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import ClearFilters from './ClearFilters'
import FilterMagnitude from './FilterMagnitude'


it('renders Clear Filters Button in App component', () => {
    const wrapped = shallow(<App />)

    expect(wrapped.find(ClearFilters).length).toEqual(1)
});

it('renders Clear Filters Button in App component', () => {
    const wrapped = shallow(<App />)

    expect(wrapped.find(FilterMagnitude).length).toEqual(1)
});
