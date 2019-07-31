import React from 'react'

const Input = ({ placeholder, onChange, type, className }) => (
    <input
        type={type}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
    />
)

export default Input
