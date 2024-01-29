import React from "react";

const Label = (props) => {
  return (
    <label htmlFor={props.for} className="form-label">
      {props.label}
    </label>
  );
};

export default Label;
