import React from "react";
import TicTacToe from "./TicTacToe";
import "./App.css";
const App = () => {
  return (
    <div className=" container mx-auto bg bg-cover  h-screen">
      <div className=" w-[30%] flex flex-col justify-center items-center h-screen mx-auto ">
        <TicTacToe />
      </div>
    </div>
  );
};

export default App;
