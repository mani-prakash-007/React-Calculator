import React from "react";
import "../styles/CalculatorBtn.css";

export const CalculatorBtn = () => {
  return (
    <div className="buttons">
      <div>
        <input type="text" placeholder="0" />
        <div className="btn-grid">
          <div className="button symbol1">AC</div>
          <div className="button symbol1">C</div>
          <div className="button symbol1">%</div>
          <div className="button symbol">÷</div>
          <div className="button number">7</div>
          <div className="button number">8</div>
          <div className="button number">9</div>
          <div className="button symbol">x</div>
          <div className="button number">4</div>
          <div className="button number">5</div>
          <div className="button number">6</div>
          <div className="button symbol">-</div>
          <div className="button number">3</div>
          <div className="button number">2</div>
          <div className="button number">1</div>
          <div className="button symbol">+</div>
          <div className="button number double">0</div>
          <div className="button number">.</div>
          <div className="button symbol">=</div>
        </div>
      </div>
    </div>
  );
};
