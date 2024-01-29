import React from "react";

const Notbirthday = (props) => {
  return (
    <div id="birthdaysomeday" className="text-center">
      <h1>
        <span id="datedays"> {props.leftDay} </span> DAYS LEFT
      </h1>
      <h5>UNTIL YOUR BIRTHDAY!</h5>
    </div>
  );
};

export default Notbirthday;
