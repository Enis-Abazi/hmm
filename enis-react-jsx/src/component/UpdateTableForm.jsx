import React, { useState } from "react";
import UpdateTableData from "./UpdateTableData";

const UpdateTableForm = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [salary, setSalary] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [currentInput, setCurrentInput] = useState("name");
  const [previewData, setPreviewData] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleNextInput = () => {
    switch (currentInput) {
      case "name":
        setCurrentInput("lastname");
        break;
      case "lastname":
        setCurrentInput("salary");
        break;
      case "salary":
        setCurrentInput("country");
        break;
      case "country":
        setCurrentInput("city");
        break;
      default:
        setCurrentInput("name");
    }
  };

  const handleReview = () => {
    setPreviewData({
      name,
      lastname,
      salary,
      country,
      city,
    });
  };

  const handleUpdateTable = (newData) => {
    // Implement logic to update table data
    console.log("Updated table data:", newData);
    setPreviewData(null);
  };

  return (
    <div className="formData">
      {currentInput === "name" && (
        <>
          <input
            id="generalInput"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <button id="nextButton" onClick={handleNextInput}>
            Next
          </button>
        </>
      )}
      {currentInput === "lastname" && (
        <>
          <input
            id="generalInput"
            type="text"
            placeholder="Lastname"
            value={lastname}
            onChange={handleLastnameChange}
          />
          <button id="nextButton" onClick={handleNextInput}>
            Next
          </button>
        </>
      )}
      {currentInput === "salary" && (
        <>
          <input
            id="generalInput"
            type="text"
            placeholder="Salary"
            value={salary}
            onChange={handleSalaryChange}
          />
          <button id="nextButton" onClick={handleNextInput}>
            Next
          </button>
        </>
      )}
      {currentInput === "country" && (
        <>
          <input
            id="generalInput"
            type="text"
            placeholder="Country"
            value={country}
            onChange={handleCountryChange}
          />
          <button id="nextButton" onClick={handleNextInput}>
            Next
          </button>
        </>
      )}
      {currentInput === "city" && (
        <>
          <input
            id="generalInput"
            type="text"
            placeholder="City"
            value={city}
            onChange={handleCityChange}
          />
          <button id="reviewButton" onClick={handleReview}>
            Review
          </button>
        </>
      )}

      <div className="previewDiv">
        {previewData && (
          <UpdateTableData newData={previewData} onUpdate={handleUpdateTable} />
        )}
      </div>
    </div>
  );
};

export default UpdateTableForm;
