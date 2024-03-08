import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Table from "./Table";
const FormThree = () => {
  const [newRow,setNewRow] = useState(false)
  const [Id, setId] = useState(uuidv4()); // Create a unique ID for each new form
  const [systemName, setSystemName] = useState("");
  const [systemLatinName, setSystemLatinName] = useState("");
  const [systemNumber, setSystemNumber] = useState("");
  const [systemAgentAddress, setSystemAgentAddress] = useState("");
  const [systemAgentPort, setSystemAgentPort] = useState("");
  const [mainSystemAddress, setMainSystemAddress] = useState("");
  const [mainSystemPort, setMainSystemPort] = useState("");

  const handleSave = () => {
    // Create an object containing form data
    const formData = {
      systemName,
      systemLatinName,
      systemNumber,
      systemAgentAddress,
      systemAgentPort,
      mainSystemAddress,
      mainSystemPort,
    };

    // Save form data to localStorage
    localStorage.setItem(`Define and confirm the agent ${Id}`, JSON.stringify(formData));

    // Clear the form by setting input values to empty strings
    setSystemName("");
    setSystemLatinName("");
    setSystemNumber("");
    setSystemAgentAddress("");
    setSystemAgentPort("");
    setMainSystemAddress("");
    setMainSystemPort("");

    // Generate a new unique ID for the next form
    setId(uuidv4());

    // Display success message
    alert("اطلاعات با موفقیت ذخیره شد و فرم پاک شد!");
  };

  return (
    <>
     <div className="max-w-7xl bg-white shadow-4 h-auto mx-8 my-10 rounded-xl p-10 flex flex-col space-y-4">
      <div className="flex flex-row w-full items-center justify-between">
        <TextField
          className="w-1/3 mx-8 text-right"
          id="outlined-basic"
          label="نام سامانه"
          variant="outlined"
          value={systemName}
          onChange={(e) => setSystemName(e.target.value)}
        />
        <TextField
          className="w-1/3 mx-8"
          id="outlined-basic"
          label="نام لاتین سامانه"
          variant="outlined"
          value={systemLatinName}
          onChange={(e) => setSystemLatinName(e.target.value)}
        />
        <TextField
          className="w-1/3 mx-8"
          id="outlined-basic"
          label="شماره سامانه"
          variant="outlined"
          value={systemNumber}
          onChange={(e) => setSystemNumber(e.target.value)}
        />
      </div>
      <div className="flex flex-row w-full items-center justify-between">
        <TextField
          className="w-1/3 mx-8"
          id="outlined-basic"
          label="آدرس سامانه عامل"
          variant="outlined"
          value={systemAgentAddress}
          onChange={(e) => setSystemAgentAddress(e.target.value)}
        />
        <TextField
          className="w-1/3 mx-8"
          id="outlined-basic"
          label="پورت سامانه عامل"
          variant="outlined"
          value={systemAgentPort}
          onChange={(e) => setSystemAgentPort(e.target.value)}
        />
        <TextField
          className="w-1/3 mx-8"
          id="outlined-basic"
          label="آدرس سامانه اصلی"
          variant="outlined"
          value={mainSystemAddress}
          onChange={(e) => setMainSystemAddress(e.target.value)}
        />
      </div>
      <div className="flex flex-row w-full items-center justify-between">
        <TextField
          className="w-1/3 mx-8 mt-8"
          id="outlined-basic"
          label="پورت سامانه اصلی"
          variant="outlined"
          value={mainSystemPort}
          onChange={(e) => setMainSystemPort(e.target.value)}
        />
      </div>

      <div className="flex justify-end">
        <Button
          variant="contained"
          className="bg-blue-500 text-white px-36 py-6 my-4 rounded-xl"
          onClick={handleSave}
        >
          ذخیره
        </Button>
      </div>
    </div>
     <Table newRow={newRow}/>
    </>
   
  );
};

export default FormThree;
