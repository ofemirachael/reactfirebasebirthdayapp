import React from "react";

const Submit = (props) => {
  return (
    <div>
      <input
        type={props.type}
        className={props.classname}
        value={props.value}
        onClick={props.func}
      />
    </div>
  );
};

export default Submit;
