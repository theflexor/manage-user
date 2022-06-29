import BorderColor from "@mui/icons-material/BorderColor";
import DeleteForever from "@mui/icons-material/DeleteForever";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

let initState = [
  {
    id: "asd",
    name: "Sebastian Vettel",
    job: "developer",
    dateBirth: "12.03.92",
    gender: "male",
    dismissed: false,
  },
  {
    id: "dasd",
    name: "Lewis Hamilton",
    job: "F1 driver",
    dateBirth: "12.03.87",
    gender: "male",
    dismissed: false,
  },
];
const UserList = ({ handleModal }) => {
  let [users, setUsers] = useState(initState);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead aria-label="a dense table">
          <TableRow>
            <TableCell className="name">Фио</TableCell>
            <TableCell className="name">Должнсть</TableCell>
            <TableCell className="name">Дата рождение</TableCell>
            <TableCell className="name">Пол</TableCell>
            <TableCell className="name">Уволен</TableCell>
            <TableCell className="name">Колеги</TableCell>
            <TableCell className="name">Опции</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="name">{user.name}</TableCell>
              <TableCell className="name">{user.job}</TableCell>
              <TableCell className="name">{user.dateBirth}</TableCell>
              <TableCell className="name">{user.gender}</TableCell>
              <TableCell className="name">
                {user.dismissed ? "true" : "false"}
              </TableCell>
              <TableCell className="name">Колеги</TableCell>
              <TableCell className="name">
                <BorderColor onClick={() => handleModal(user)} />
                <DeleteForever onClick={() => handleDelete(user.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
