import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      className="form-control"
      value={props.value}
      onChange={props.func}
    />
  );
};

export default Input;
