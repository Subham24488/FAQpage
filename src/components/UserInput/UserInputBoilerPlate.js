import React, { useState } from "react";
import "./UserInput.css";

const UserInputBoilerPlate = ({ addInput }) => {
  const [userData, setUserData] = useState({
    question: "",
    answer: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInput(userData);
    setUserData({
      question: "",
      answer: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="userInput__form">
      <label style={{ color: "#64b5f6" }}>Q. </label>
      <input
        className="userInput__input"
        type="text"
        name="question"
        value={userData.question}
        required
        placeholder="Write the question Here.."
        onChange={handleChange}
      />
      <br />
      <label style={{ color: "#64b5f6" }}>A. </label>
      <input
        className="userInput__input"
        type="text"
        name="answer"
        value={userData.answer}
        required
        placeholder="Write the answer here.."
        onChange={handleChange}
      />
      <br />
      <button className="userInput__submitBtn" type="submit">
        +
      </button>
    </form>
  );
};

export default UserInputBoilerPlate;
