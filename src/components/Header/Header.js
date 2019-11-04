import React from "react";

function Header(props) {
  return (
    <div className="header-root">
      <h1 className="header" style={{ marginLeft: "5%", textAlign: "left" }}>
        {props.title}
      </h1>
    </div>
  );
}

Header.defaultProps = {
  title: "Internal Debugging GUI"
};

export default Header;
