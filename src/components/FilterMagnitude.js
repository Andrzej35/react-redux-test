import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterByMagnitude } from '../actions'

import Button from './button.component'
import Input from './input.component'

const FilterMagnitude = (props) => {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        return setValue(e.target.value)
    }

    const handleSubmit = () => {
        props.filterByMagnitude(Number(value))
    }

    // console.log(this.props)
    return (
        <div className="row">
            <div className="col">
                <div className="input-group mb-3">
                    <Input type="text" className="form-control" placeholder='example input: 1.1' onChange={(e) => handleChange(e)} />
                    <div className="input-group-append">
                        <Button type='button' className="btn btn-outline-secondary" onClick={() => handleSubmit()} text='Filter By Magnitude' />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    earthquakes: state.earthquakes,
    magnitude: state.magnitude
})

FilterMagnitude.propTypes = {
    filterByMagnitude: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { filterByMagnitude })(FilterMagnitude)
