import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@mui/material";
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
      key.startsWith("Define and confirm the agent")
    );

    const parsedRows = localStorageData.map(([key, value]) => {
      const data = JSON.parse(value);
      return {
        id: key,
        systemAgentPort: data.systemAgentPort || "",
        systemOrganization: data.systemOrganization || "",
        systemName: data.systemName || "",
        systemAgentAddress: data.systemAgentAddress || "",
        mainSystemPort: data.mainSystemPort || "",
        mainSystemAddress: data.mainSystemAddress || "",
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
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    نام سازمان
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/6 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    نام سامانه
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/6 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    آدرس عامل
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/6 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    پورت عامل
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/6 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    آدرس سمانه اصلی
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/6 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    پورت سامانه اصلی
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/6 border-none mx-8 text-lg"
                      placeholder="جستجو"
                    />
                    <img src={Search} alt="search" />
                  </label>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col justify-center items-center">
                  <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    وضعیت
                  </Typography>
                  <label className="border-2 flex flex-row-reverse rounded-xl py-8   justify-start">
                    <input
                      type="text"
                      className="w-3/6 border-none mx-8 text-lg"
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
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell><Typography sx={{ textAlign: "center" }}>{row.systemOrganization}</Typography></TableCell>
                <TableCell><Typography sx={{ textAlign: "center" }}>{row.systemName}</Typography></TableCell>
                <TableCell><Typography sx={{ textAlign: "center" }}>{row.systemAgentAddress}</Typography></TableCell>
                <TableCell><Typography sx={{ textAlign: "center" }}>{row.systemAgentPort}</Typography></TableCell>
                <TableCell><Typography sx={{ textAlign: "center" }}>{row.mainSystemAddress}</Typography></TableCell>
                <TableCell><Typography sx={{ textAlign: "center" }}>{row.mainSystemPort}</Typography></TableCell>
                <TableCell><Typography sx={{ textAlign: "center" }}>ثبت اولیه</Typography></TableCell>
                <TableCell>
                  <div className="flex items-center justify-center">
                    <button className="ml-6">
                      <img src={Edit} alt="Edit" />
                    </button>
                    <button onClick={() => handelDelete(row.id)}>
                      <img src={Delete} alt="Delete" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;
