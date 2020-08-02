import React from "react";
import UserViewBoilerplate from "./UserViewBoilerplate";

import "./UserView.css";

const UserView = ({ datas }) => {
  return (
    <div className="userView">
      <h6
        style={{
          color: "grey",
          position: "relative",
          top: "18px",
          fontSize: "10px",
          letterSpacing: "2px",
        }}
      >
        QUESTIONS & ANSWERS
      </h6>
      {datas.map((item, index) => (
        <UserViewBoilerplate question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default UserView;
