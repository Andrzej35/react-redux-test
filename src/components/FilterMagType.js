import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterByMagtype } from '../actions'
import Button from './button.component'
import Input from './input.component'

function FilterMagType(props) {

    const [value, setValue] = useState('')

    function handleChange(e) {
        return setValue(e.target.value)
    }

    return (
        <div className="row">
            <div className="col">
                <div className="input-group mb-3">
                    <Input type="text" className="form-control" placeholder="example text 'ml'" onChange={(e) => handleChange(e)} />
                    <div className="input-group-append">
                        <Button type='button' className="btn btn-outline-secondary" onClick={() => props.filterByMagtype(value)} text="Filter By Magtype" />
                    </div>
                </div>

            </div>
        </div>
    )
}

FilterMagType.propTypes = {
    filterByMagtype: PropTypes.func.isRequired
}

export default connect(null, { filterByMagtype })(FilterMagType)
