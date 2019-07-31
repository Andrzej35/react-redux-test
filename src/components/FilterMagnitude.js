import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterByMagnitude } from '../actions'

import Button from './button.component'
import Input from './input.component'

class FilterMagnitude extends React.Component {

    state = {
        value: '',
        text: 'example input 1.1'
    }

    filterBy(mag) {
        return mag.properties.mag === mag
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit() {

        this.props.filterByMagnitude(Number(this.state.value))
        this.setState({
            value: ''
        })
    }

    render() {

        return (
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <Input type="text" className="form-control" placeholder={this.state.text} onChange={(e) => this.handleChange(e)} value={this.state.value} />
                        <div className="input-group-append">
                            <Button type='button' className="btn btn-outline-secondary" onClick={() => this.handleSubmit()} text='Filter By Magnitude' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

FilterMagnitude.propTypes = {
    filterByMagnitude: PropTypes.func.isRequired
}

export default connect(null, { filterByMagnitude })(FilterMagnitude)
