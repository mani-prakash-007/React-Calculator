import React, { useState, useEffect, useRef } from "react";
import "../styles/Main.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { evaluate } from "mathjs";

export const Main = () => {
  //State Variables
  const [input, setInput] = useState("0");
  const [history, setHistory] = useState([]);
  const [btnValue, setBtnValue] = useState("History");
  const [calculatorDisplayValue, setCalculatorDisplayValue] = useState("Block");
  const [historyDisplayValue, setHistoryDisplayValue] = useState("none");
  const [contentAlignment, setContentAlignment] = useState("center");

  //References
  const divRef = useRef(null);
  //Functions
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
    const expression = `${input} = ${evaluate(input).toString()}`;
    const result = evaluate(input).toString();
    if (result === "Infinity") {
      setInput("Error");
    } else {
      setInput(result);
      setHistory((prevHistory) => [expression, ...prevHistory]);
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
  const handleKeyEvents = (e) => {
    const allowedKeys = new Set([
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "-",
      "*",
      "/",
      "%",
      "=",
      "^",
      ".",
      "(",
      ")",
      "Backspace",
      "Enter",
      "Delete",
    ]);
    if (allowedKeys.has(e.key)) {
      e.preventDefault();
      if (e.key === "Backspace") {
        handleClearOne();
      } else if (e.key === "Delete") {
        handleClear();
      } else if (e.key === "Enter" || e.key === "=") {
        handleEval();
      } else {
        handleInput(e.key);
      }
    }
  };

  const showHistory = () => {
    if (btnValue === "History") {
      setBtnValue("Calculator");
      setHistoryDisplayValue("block");
      setCalculatorDisplayValue("none");
      setContentAlignment("flex-start");
    }
    if (btnValue === "Calculator") {
      setBtnValue("History");
      setHistoryDisplayValue("none");
      setCalculatorDisplayValue("block");
      setContentAlignment("center");
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };
  console.log("dkfjbdfbjh");
  return (
    <>
      <div
        className="buttons"
        tabIndex={0}
        onKeyDown={handleKeyEvents}
        ref={divRef}
        style={{ justifyContent: contentAlignment, outline: "none" }}
      >
        <div style={{ display: calculatorDisplayValue }}>
          <input type="text" placeholder="0" value={input} readOnly disabled />
          <div className="btn-grid">
            <div className="button symbol1" onClick={() => handleClear()}>
              AC
            </div>
            <div className="button symbol1" onClick={() => handleClearOne()}>
              <FaDeleteLeft />
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
            <div className="button number" onClick={() => handleInput(1)}>
              1
            </div>
            <div className="button number" onClick={() => handleInput(2)}>
              2
            </div>
            <div className="button number" onClick={() => handleInput(3)}>
              3
            </div>
            <div className="button symbol" onClick={() => handleInput("+")}>
              +
            </div>
            <div
              className="button number double"
              onClick={() => handleInput(0)}
            >
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
        <div style={{ display: historyDisplayValue }} className="history">
          <div className="historyHeader">
            <div className="historyHeading">History</div>
            <div className="clearBtn" onClick={clearHistory}>
              Clear
            </div>
          </div>
          <div className="historyList">
            {history.length === 0 ? (
              <p className="list">No Records</p>
            ) : (
              history.map((record) => <p className="list">{record}</p>)
            )}
          </div>
        </div>
      </div>
      <div className="historybutton">
        <button onClick={showHistory}>{btnValue}</button>
      </div>
    </>
  );
};
