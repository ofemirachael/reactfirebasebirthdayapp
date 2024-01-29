import React from "react";

const Isbirthday = (props) => {
  return (
    <div id="birthdaytoday" className="text-center">
      <h6>
        Happy birthday! <span id="bname">{props.username}</span>, I hope all
        your birthday wishes and dreams come true. here is a quote for you:
      </h6>
      <h3 id="textquote">{props.quote}</h3>
      <h6 id="textauthor">{props.author}</h6>
    </div>
  );
};

export default Isbirthday;
