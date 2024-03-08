import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Table from "./Table";

const FormOne = () => {
  const [Id, setId] = useState(uuidv4()); // ایجاد آیدی یونیک برای هر فرم جدید
  const [systemName, setSystemName] = useState("");
  const [systemLatinName, setSystemLatinName] = useState("");
  const [systemNumber, setSystemNumber] = useState("");
  const [portNumber, setPortNumber] = useState("");
  const [newRow, setNewRow] = useState(false);
  const handleSave = () => {
    // ساختن یک شیء که شامل اطلاعات فرم است
    const formData = {
      systemName,
      systemLatinName,
      systemNumber,
      portNumber,
    };

    // ذخیره اطلاعات فرم در localStorage
    localStorage.setItem(`System definition ${Id}`, JSON.stringify(formData));

    // پاک کردن فرم با تنظیم مقادیر ورودی‌ها به رشته خالی ('')
    setSystemName("");
    setSystemLatinName("");
    setSystemNumber("");
    setPortNumber("");

    // ایجاد یک آیدی یونیک جدید برای فرم بعدی
    setId(uuidv4());

    // اعلان موفقیت ذخیره‌سازی
    alert("اطلاعات با موفقیت ذخیره شد و فرم پاک شد!");
    setNewRow(!newRow);
  };

  return (
    <>
      <div className="max-w-7xl bg-white shadow-4 h-auto mx-8 my-10 rounded-xl p-10">
        <div className="flex flex-row  w-full   items-center justify-between">
            <TextField
              className="w-1/3 mx-8 "
              id="systemName"
              label="نام سامانه"
              variant="outlined"
              value={systemName}
              onChange={(e) => setSystemName(e.target.value)}
            />
          <TextField
            className="w-1/3 mx-8"
            id="systemLatinName"
            label="نام لاتین سامانه"
            variant="outlined"
            value={systemLatinName}
            onChange={(e) => setSystemLatinName(e.target.value)}
          />
          <TextField
            className="w-1/3 mx-8"
            id="systemNumber"
            label="شماره سامانه"
            variant="outlined"
            value={systemNumber}
            onChange={(e) => setSystemNumber(e.target.value)}
          />
          <TextField
            className="w-1/3 mx-8"
            id="portNumber"
            label="شماره پورت"
            variant="outlined"
            value={portNumber}
            onChange={(e) => setPortNumber(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            variant="contained"
            className="bg-blue-500 text-white px-36 py-6 my-4 rounded-xl"
            onClick={handleSave}
          >
            ذخیره
          </button>
        </div>
      </div>
      <Table newRow={newRow} />
    </>
  );
};

export default FormOne;
