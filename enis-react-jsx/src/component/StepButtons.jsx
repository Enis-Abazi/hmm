import React from "react";

const StepButtons = ({ handlePrev, handleRestart, handleNext }) => {
  return (
    <div className="buttons">
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleRestart}>Restart</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepButtons;
