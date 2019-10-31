import React from "react";

function Checkbox(props) {
  const style = props.enabled
    ? { backgroundColor: "red" }
    : { backgroundColor: "blue" };

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "1%" }}>
      <div className="box" style={style}></div>
      <h3 style={{ textAlign: "left", margin: 0 }}>{props.name}</h3>
    </div>
  );
}

Checkbox.defaultProps = {
  enabled: false
};

export default Checkbox;
