import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import TablePagination from "@material-ui/core/TablePagination";

import Chip from "@material-ui/core/Chip";

import sortArrayObj from "../../utils/sort";

import Head from "../TableHead/TableHead"; // TABLE HEAD

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 500,
  },
  head: {
    background: "lightgray",
  },

  permissions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "10px",
  },
  tablerow: {
    width: "100%",
  },
  tableCell: {
    width: "200px",
  },
  pagination: {},
}));

const UserTable = ({ data }) => {
  const classes = useStyles();

  //collapse
  const [open, setOpen] = React.useState(false);
  const [itemID, setItemID] = useState([]);

  const [sortProperty, setSortProperty] = useState(""); // sort by property
  const [sortOrder, setSortOrder] = useState(false); // sort direction

  //pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //collapse open handler
  const handleExpand = (id) => {
    setOpen(!open);
    if (itemID.includes(id)) {
      setItemID((prevState) => prevState.filter((item) => item !== id));
      setOpen(true);
    } else {
      setItemID((prevState) => [...prevState, id]);
      setOpen(true);
    }
  };

  // sort order
  const sortOrderHandler = (sortBy) => {
    setSortProperty(sortBy);
    setSortOrder((prevState) => !prevState);
  };

  //sorted data
  const sortedData = (data) => {
    return sortOrder
      ? sortArrayObj(data, ...sortProperty) // sortArrayObj z utils/sort.js
      : sortArrayObj(data, ...sortProperty).reverse();
  };

  //pagination
  const handleChangePage = (event, newPage) => {
    // console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // console.log(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  return (
    <TableContainer>
      <Table className={classes.table}>
        {/* //!TABLE HEAD*/}
        <Head
          sortProperty={sortProperty}
          sortOrder={sortOrder}
          sortOrderHandler={sortOrderHandler}
        />
        {/* //!TABLE BODY */}

        {data &&
          sortedData(
            data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          ).map((item) => (
            <TableBody key={item.id}>
              <TableRow>
                <TableCell>
                  {item.firstName} {item.lastName}
                </TableCell>
                <TableCell>{item.userName}</TableCell>
                <TableCell>{item.accountType}</TableCell>
                <TableCell>{item.createDate}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={(id) => handleExpand(item.id)}
                  >
                    {item.permissions &&
                      item.permissions.length > 0 &&
                      (open && itemID.includes(item.id) ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      ))}
                  </IconButton>
                </TableCell>
              </TableRow>

              {item.permissions &&
                item.permissions.length > 0 &&
                open &&
                itemID.includes(item.id) && (
                  <TableRow className={classes.permissions}>
                    {item.permissions.map((item) => (
                      <Chip
                        variant={"outlined"}
                        label={item}
                        key={item.length * Math.random(99)}
                      />
                    ))}
                  </TableRow>
                )}
            </TableBody>
          ))}
        {/* //!PAGINATION */}
        <TablePagination
          className={classes.pagination}
          rowsPerPageOptions={[5, 10, 20, data.length]}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage} //from MUI
          onRowsPerPageChange={handleChangeRowsPerPage} //from MUI
        />
      </Table>
    </TableContainer>
  );
};

export default UserTable;
