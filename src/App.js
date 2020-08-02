import React, { useState } from "react";
import "./App.css";
import UserView from "./components/UserView/UserView";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [datas, setDatas] = useState([]);

  const addDatas = (input) => {
    setDatas([...datas, { question: input.question, answer: input.answer }]);
  };

  console.log(datas);
  return (
    <>
      <UserInput addDatas={addDatas} />
      <hr></hr>
      <UserView datas={datas} />
    </>
  );
}

export default App;
