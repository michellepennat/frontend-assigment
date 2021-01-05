import React from "react";

const Container = (props) => {
  return (
    <div className="container" style={{ width: "100%", display:'flex' }}>
      {props.children}
    </div>
  );
};

export default Container;
