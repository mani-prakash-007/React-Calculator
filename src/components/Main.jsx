import React, { useState } from "react";
import "../styles/Main.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { evaluate } from "mathjs";

export const Main = () => {
  const [input, setInput] = useState("0");

  const handleInput = (userInput) => {
    setInput((PrevUserInput) =>
      PrevUserInput === "0"
        ? userInput.toString()
        : PrevUserInput + userInput.toString()
    );
  };
  const handleClear = () => {
    setInput("0");
  };
  const handleEval = () => {
    const result = evaluate(input).toString();
    if (result === "Infinity") {
      setInput("Error");
    } else {
      setInput(result);
    }
  };
  const handleClearOne = () => {
    if (input === "Error") {
      setInput("0");
    } else if (input.length === 1) {
      setInput("0");
    } else {
      const result = input.slice(0, -1);
      setInput(result);
    }
  };
  return (
    <div className="buttons">
      <div>
        <input type="text" placeholder="0" value={input} readOnly disabled />
        <div className="btn-grid">
          <div className="button symbol1" onClick={() => handleClear()}>
            AC
          </div>
          <div className="button symbol1" onClick={() => handleClearOne()}>
            <IoMdArrowRoundBack />
          </div>
          <div className="button symbol1" onClick={() => handleInput("%")}>
            %
          </div>
          <div className="button symbol" onClick={() => handleInput("/")}>
            ÷
          </div>
          <div className="button number" onClick={() => handleInput(7)}>
            7
          </div>
          <div className="button number" onClick={() => handleInput(8)}>
            8
          </div>
          <div className="button number" onClick={() => handleInput(9)}>
            9
          </div>
          <div className="button symbol" onClick={() => handleInput("*")}>
            x
          </div>
          <div className="button number" onClick={() => handleInput(4)}>
            4
          </div>
          <div className="button number" onClick={() => handleInput(5)}>
            5
          </div>
          <div className="button number" onClick={() => handleInput(6)}>
            6
          </div>
          <div className="button symbol" onClick={() => handleInput("-")}>
            -
          </div>
          <div className="button number" onClick={() => handleInput(3)}>
            3
          </div>
          <div className="button number" onClick={() => handleInput(2)}>
            2
          </div>
          <div className="button number" onClick={() => handleInput(1)}>
            1
          </div>
          <div className="button symbol" onClick={() => handleInput("+")}>
            +
          </div>
          <div className="button number double" onClick={() => handleInput(0)}>
            0
          </div>
          <div className="button number" onClick={() => handleInput(0)}>
            .
          </div>
          <div className="button symbol" onClick={() => handleEval()}>
            =
          </div>
        </div>
      </div>
    </div>
  );
};
