import React from "react";

const StepIndicatior = ({ step }) => {
  return (
    <div className="numbers">
      <div className={`${step >= 1 ? "active" : "inactive"}`}>1</div>
      <div className={`${step >= 2 ? "active" : "inactive"}`}>2</div>
      <div className={`${step >= 3 ? "active" : "inactive"}`}>3</div>
    </div>
  );
};

export default StepIndicatior;
