import React, { useState } from "react";
import StepIndicatior from "./StepIndicatior";
import StepButtons from "./StepButtons";
import "../App.css";

const messages = ["First Step", "Second Step", "Third Step"];

const Steps = () => {
  let [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [buttonContent, setButtonContent] = useState("X");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setButtonContent(buttonContent === "X" ? "OK" : "X");
    setStep(1);
  };

  const handleRestart = () => {
    setStep(1);
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <div className="containerApp">
      <div className="exitContainer">
        <button className="exit" onClick={toggleVisibility}>
          {buttonContent}
        </button>
      </div>
      {isVisible && (
        <div className="steps">
          <StepIndicatior step={step} />
          <p>
            Step: {step} {messages[step - 1]}
          </p>
          <StepButtons
            handlePrev={handlePrev}
            handleRestart={handleRestart}
            handleNext={handleNext}
          />
        </div>
      )}
    </div>
  );
};
export default Steps;
