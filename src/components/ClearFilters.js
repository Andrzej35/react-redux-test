import React from 'react'
import Button from './button.component'

const ResetBtn = () => (
    <p>
        <Button className="btn btn-danger" onClick={() => document.location.reload()} text='Reset Btn' />
    </p>
)

export default ResetBtn
