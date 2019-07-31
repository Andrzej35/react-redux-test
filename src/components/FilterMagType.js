import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterByMagtype } from '../actions'
import Button from './button.component'
import Input from './input.component'

class FilterMagType extends React.Component {

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
                        <Input type="text" className="form-control" placeholder="example text 'ml'" onChange={(e) => this.handleChange(e)} />
                        <div className="input-group-append">
                            <Button type='button' className="btn btn-outline-secondary" onClick={() => this.props.filterByMagtype(this.state.value)} text="Filter By Magtype" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

FilterMagType.propTypes = {
    filterByMagtype: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
    earthquakes: state.earthquakes
})

export default connect(mapStateToProps, { filterByMagtype })(FilterMagType)
