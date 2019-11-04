import React from "react";

const DebugDropdown = props => {
  return (
    <div>
      <select onChange={e => props.onChange(e.target.value)}>
        <option value="0">Debug level 0</option>
        <option value="1">Debug level 1</option>
        <option value="2">Debug level 2</option>
        <option value="3">Debug level 3</option>
      </select>
    </div>
  );
};

export default DebugDropdown;
