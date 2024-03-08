import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Table from "./Table";
const FormTwo = () => {
  const [newRow,setNewRow] = useState(false)
  const [formData, setFormData] = useState({
    id: uuidv4(),
    systemName: '',
    systemOrganization: '',
    systemCategory: '',
    eventType: '',
    eventSensitivity: '',
    eventDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Save form data to localStorage
    localStorage.setItem(`Definition of log ${formData.id}`, JSON.stringify(formData));

    // Reset form data and generate a new unique ID for the next form
    setFormData({
      id: uuidv4(),
      systemName: '',
      systemOrganization: '',
      systemCategory: '',
      eventType: '',
      eventSensitivity: '',
      eventDescription: ''
    });

    // Display success message
    alert('اطلاعات با موفقیت ذخیره شد و فرم پاک شد!');
    setNewRow(!newRow);
  };

  return (
    <>
    <div className="max-w-7xl bg-white shadow-4 h-auto mx-8 my-10 rounded-xl p-10 flex flex-col space-y-4">
      <div className="flex flex-row w-full items-center justify-between">
        <TextField className="w-1/3 mx-8 text-right" id="outlined-basic" label="نام سامانه" variant="outlined" name="systemName" value={formData.systemName} onChange={handleChange} />
        <TextField className="w-1/3 mx-8" id="outlined-basic" label="نام سازمان" variant="outlined" name="systemOrganization" value={formData.systemOrganization} onChange={handleChange} />
        <TextField className="w-1/3 mx-8" id="outlined-basic" label="دسته بندی" variant="outlined" name="systemCategory" value={formData.systemCategory} onChange={handleChange} />
      </div>
      <div className="flex flex-row w-full items-center justify-between">
        <TextField className="w-1/3 mx-8" id="outlined-basic" label="نوع رویداد" variant="outlined" name="eventType" value={formData.eventType} onChange={handleChange} />
        <TextField className="w-1/3 mx-8" id="outlined-basic" label="حساسیت رویداد" variant="outlined" name="eventSensitivity" value={formData.eventSensitivity} onChange={handleChange} />
        <TextField className="w-1/3 mx-8" id="outlined-basic" label="توضیحات رویداد" variant="outlined" name="eventDescription" value={formData.eventDescription} onChange={handleChange} />
      </div>

      <div className="flex justify-end">
        <Button variant="contained" className="bg-blue-500 text-white px-8 py-3 my-4 rounded-xl" onClick={handleSave}>ذخیره</Button>
      </div>
    </div>
    <Table newRow={newRow}/>
    </>
    
  );
};

export default FormTwo;
