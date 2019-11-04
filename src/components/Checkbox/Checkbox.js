import "./Checkbox.css";

import React from "react";

function Checkbox(props) {
  const box_style = props.enabled
    ? { backgroundColor: "#4e8adb" }
    : { backgroundColor: "#2F568B" };

  return (
    <div
      style={{ display: "flex", alignItems: "center", margin: "1%" }}
      onClick={() => props.onClick(props.name)}
    >
      <div className="box" style={box_style} />
      <h3 style={{ textAlign: "left", margin: 5, color: "white" }}>
        {props.name}
      </h3>
    </div>
  );
}

Checkbox.defaultProps = {
  enabled: false
};

export default Checkbox;
