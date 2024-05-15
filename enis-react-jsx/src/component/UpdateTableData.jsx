import React from "react";

const UpdateTableData = ({ newData, onUpdate }) => {
  const handleSubmit = () => {
    onUpdate(newData);
  };
  return (
    <div className="tableUpdateContainer">
      <p>
        {newData.name} {newData.lastname} {newData.salary} {newData.country}{" "}
        {newData.city}{" "}
      </p>
      <button id="button-66" onClick={handleSubmit}>
        Submit Approval!
      </button>
    </div>
  );
};

export default UpdateTableData;
