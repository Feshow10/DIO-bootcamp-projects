import React from 'react';

function Button (props) {

const { name , onClick} = props
//mesma coisa const name = props.name

    return (
        <button onClick={onClick}>{name}</button>
    )
}

export default Button