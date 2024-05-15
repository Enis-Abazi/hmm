import React from "react";
import "../styles/table.css";

const employeeData = [
  {
    id: 1,
    name: "Enis",
    lastname: "Abazi",
    salary: 20000,
    country: "Kosovo",
    city: "Vushtrri",
  },
  {
    id: 2,
    name: "Dion",
    lastname: "Abazi",
    salary: 30000,
    country: "Kosovo",
    city: "Prishtina",
  },
  {
    id: 3,
    name: "Enzo",
    lastname: "Abazi",
    salary: 10000,
    country: "Kosovo",
    city: "Kaqanik",
  },
];

const Table = () => {
  return (
    <div className="tables">
      <h2>Employee Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Salary</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>
                <button id="btn-Delivered">{employee.salary}</button>
              </td>
              <td>{employee.country}</td>
              <td>{employee.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
