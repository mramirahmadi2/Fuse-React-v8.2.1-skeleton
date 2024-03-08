import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { InputAdornment, OutlinedInput, Typography } from "@mui/material";
import Edit from "../Svg/Edit.svg";
import Delete from "../Svg/Delete.svg";
import DeleteModal from "../Modal/Delete";
import Search from "../Svg/Search.svg";
const MyTable = (newRow) => {
  const [rows, setRows] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  useEffect(() => {
    const localStorageData = Object.entries(localStorage).filter(([key]) =>
      key.startsWith("System definition")
    );

    const parsedRows = localStorageData.map(([key, value]) => {
      const data = JSON.parse(value);
      return {
        id: key,
        port: data.portNumber || "",
        organizationName: data.systemName || "",
        latinName: data.systemLatinName || "",
        systemNumber: data.systemNumber || "",
      };
    });

    setRows(parsedRows);
  }, [newRow, showDeleteModal]);
  const handelDelete = (id) => {
    setShowDeleteModal(true);
    setSelectedItemId(id);
  };

  return (
    <div className="max-w-7xl bg-white shadow-4 h-auto mx-8 my-10 rounded-xl p-10">
      <DeleteModal
        show={showDeleteModal}
        close={() => setShowDeleteModal(false)}
        id={selectedItemId}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    نام سازمان
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/4 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    نام لایتن سامانه
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/4 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    شناسه سامانه
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/4 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    شماره پرت
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/4 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length >= 1 ? (
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Typography sx={{ textAlign: "center" }}>
                      {row.organizationName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ textAlign: "center" }}>
                      {row.latinName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ textAlign: "center" }}>
                      {row.systemNumber}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ textAlign: "center" }}>
                      {row.port}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <button className="ml-6">
                      <img src={Edit} alt="Edit" />
                    </button>
                    <button onClick={() => handelDelete(row.id)}>
                      <img src={Delete} alt="Delete" />
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5}>جدول خالی است</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;
