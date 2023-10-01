import React from "react";

const MenuItem = (props) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${props.image})` }}></div>
      <h1>{props.name}</h1>
      <p>RS {props.price}</p>
    </div>
  );
};

export default MenuItem;
