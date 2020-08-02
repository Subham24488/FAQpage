import React, { useState, useEffect } from "react";
import UserInputBoilerPlate from "./UserInputBoilerPlate";
import { Delete } from "../Icons/Chevron";

const UserInput = ({ addDatas }) => {
  const [input, setInput] = useState([
    {
      question: "Hey, what's your name",
      answer: "hi, my name is John!",
    },
  ]);

  const addInput = (userData) => {
    setInput([
      ...input,
      { question: userData.question, answer: userData.answer },
    ]);
  };

  useEffect(() => {
    return addDatas(input[input.length - 1]);
  }, [input]);

  return (
    <div className="userInput">
      <header>
        <h6
          style={{
            color: "grey",
            position: "relative",
            top: "25px",
            letterSpacing: "2px",
            fontSize: "10px",
          }}
        >
          QUESTIONS & ANSWERS
        </h6>
        <h4
          style={{
            fontStyle: "italic",
            fontWeight: 200,
            position: "relative",
            top: "20px",
          }}
        >
          Write the questions and answers that came up
        </h4>
      </header>
      <ul className="userInput__ul">
        {input.map((item, i) => (
          <>
            <div className="userInput__inputDisplay" key={i}>
              <li className="userInput__list">
                <span style={{ color: "#64b5f6" }}>Q. </span>
                {item.question}
                <span style={{ float: "right" }}>
                  <Delete classsName="userInput__delete" width={15} />
                </span>
              </li>
              <li className="userInput__list">
                <span style={{ color: "#64b5f6" }}>A. </span>
                {item.answer}
              </li>
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
        ))}
      </ul>

      <UserInputBoilerPlate addInput={addInput} />
    </div>
  );
};

export default UserInput;
