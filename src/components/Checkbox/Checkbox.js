import "./Checkbox.css"

import React from 'react';

function Checkbox(props) {
    const style = props.enabled ? {backgroundColor:"red"} : {backgroundColor:"blue"};

    return(
        <div className="checkbox-root">
            <div className="box" style={style} onClick={props.handleClick}></div>
            <h3 style={{textAlign:"left",margin: 0}}>{props.name}</h3>
            
        </div>
    );
}

Checkbox.defaultProps = {
    enabled: false,
}

export default Checkbox;