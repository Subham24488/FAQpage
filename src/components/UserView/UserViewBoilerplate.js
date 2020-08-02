import React, { useState, useRef } from "react";
import { Chevron } from "../Icons/Chevron";

import "./UserView.css";

//main area

const UserViewBoilerplate = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  const toggle = () => {
    setActive(active ? false : true);
    setHeight(active === true ? "0px" : `${content.current.scrollHeight}px`);
  };
  console.log(active);

  return (
    <>
      <button className="userView__button" onClick={toggle}>
        <p className="userView__question">
          <span style={{ color: "#64b5f6" }}>Q. </span>
          {question}
        </p>
        <Chevron
          classsName={` ${active ? "userView__rotate" : "userView__chevron"}`}
          width={10}
          fill={"#777"}
        />
      </button>

      <div
        ref={content}
        className="userView__answerArea"
        style={{ maxHeight: `${height}` }}
      >
        <div className="userView__answer">
          <p className="userView__answerPara">
            <span style={{ color: "#64b5f6" }}>A. </span>
            {answer}
          </p>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          color: "grey",
          borderTop: "dashed",
          borderWidth: "thin",
          opacity: 0.5,
        }}
      ></hr>
    </>
  );
};

export default UserViewBoilerplate;
