import React from "react";
import UpdateTableForm from "./component/UpdateTableForm";
import Table from "./component/Table";
import "./styles/table.css";

const App = () => {
  return (
    <div className="containerApp">
      <UpdateTableForm />
      <Table />
    </div>
  );
};

export default App;
