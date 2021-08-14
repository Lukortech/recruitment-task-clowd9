import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const useStyles = makeStyles({
  head: {
    background: "lightgray",
  },
});

const headData = [
  {
    id: 1,
    title: "Name and Surname",
    sortProperty: ["firstName", "lastName"],
  },
  {
    id: 2,
    title: "User Name",
    sortProperty: ["userName"],
  },
  {
    id: 3,
    title: "Account Type",
    sortProperty: ["accountType"],
  },

  {
    id: 4,
    title: "Create Date",
    sortProperty: ["createDate"],
  },
  {
    id: 5,
    title: "Permissions",
    sortProperty: [],
  },
];

const Head = ({ sortProperty, sortOrder, sortOrderHandler }) => {
  const classes = useStyles();

  // console.log(sortProperty, sortOrder);

  // sort arrow indicator
  const sortByIndicator = (sortBy) => {
    return sortProperty === sortBy && sortOrder ? "asc" : "desc";
  };
  return (
    <TableHead className={classes.head}>
      <TableRow>
        {headData.map((item) => (
          <TableCell key={item.id}>
            {item.title}
            <TableSortLabel
              hideSortIcon={item.title === "Permissions"}
              active={sortProperty === item.sortProperty}
              direction={sortByIndicator(item.sortProperty)}
              onClick={() => sortOrderHandler(item.sortProperty)}
            />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Head;
