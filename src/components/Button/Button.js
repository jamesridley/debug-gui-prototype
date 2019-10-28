import './Button.css';

import React from 'react';

function Button(props) {
    return (
        <button disabled={props.disabled} className="button-root" onClick={props.handleClick}>
            {props.name}
        </button>
    );
}

export default Button
