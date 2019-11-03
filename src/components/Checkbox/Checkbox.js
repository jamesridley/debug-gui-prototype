import "./Checkbox.css";

import React from "react";

function Checkbox(props) {
  const style = props.enabled
    ? { backgroundColor: "#4e8adb" }
    : { backgroundColor: "#2F568B" };

  return (
    <div
      style={{ display: "flex", alignItems: "center", margin: "1%" }}
      onClick={() => props.onClick(props.name)}
    >
      <div className="box" style={style} />
      <h3 style={{ textAlign: "left", margin: 0 }}>{props.name}</h3>
    </div>
  );
}

Checkbox.defaultProps = {
  enabled: false
};

export default Checkbox;
