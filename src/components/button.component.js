import React from 'react'

const Button = ({ text, onClick, type, className }) => (
    <button
        type={type}
        onClick={onClick}
        className={className}
    >
        {text}
    </button>
)

export default Button
