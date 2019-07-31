import React from 'react'
import { connect } from 'react-redux'
import { filterByMagnitude } from '../actions'

import Button from './button.component'
import Input from './input.component'

class FilterMagnitude extends React.Component {

    state = {
        value: ''
    }

    filterBy(mag) {
        return mag.properties.mag === mag
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {

        return (
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <Input type="text" className="form-control" placeholder="example input 1.1" onChange={(e) => this.handleChange(e)} />
                        <div className="input-group-append">
                            <Button type='button' className="btn btn-outline-secondary" onClick={() => this.props.filterByMagnitude(Number(this.state.value))} text='Filter By Magnitude' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    earthquakes: state.earthquakes,
    filterMagnitude: state.earthquakes
})

export default connect(mapStateToProps, { filterByMagnitude })(FilterMagnitude)
