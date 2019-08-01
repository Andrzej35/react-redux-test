import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './button.component'
import { resetFilters } from '../actions'

const ResetBtn = (props) => (
    <p>
        <Button className="btn btn-danger" onClick={() => props.resetFilters()} text='Reset Btn' />
    </p >
)


ResetBtn.propTypes = {
    resetFilters: PropTypes.func.isRequired
}

export default connect(null, { resetFilters })(ResetBtn)
