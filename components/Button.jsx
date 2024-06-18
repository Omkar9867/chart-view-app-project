import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className="text-gray-700 px-4 py-1 pt-0.5 rounded-md border-2 border-opacity-20 flex items-center gap-2 border-gray-600 hover:bg-green-700 hover:border-green-700 hover:text-white transition duration-300"> {props.icon && <span>{props.icon}</span>} {props.label}</button>
        </div>
    )
}

export default Button