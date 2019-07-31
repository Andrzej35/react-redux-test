import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './button.component'
import { resetFilters } from '../actions'

class ResetBtn extends React.Component {
    render() {
        return (<p>
            <Button className="btn btn-danger" onClick={() => this.props.resetFilters()} text='Reset Btn' />
        </p >)
    }

}

ResetBtn.propTypes = {
    resetFilters: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    earthquakes: state.earthquakes
})

export default connect(mapStateToProps, { resetFilters })(ResetBtn)
