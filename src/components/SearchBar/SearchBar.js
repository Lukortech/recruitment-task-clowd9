import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
  },
  searchField: {
    width: "500px",
    marginRight: "20px",
  },
  searchSelect: {
    width: "100px",
    marginRight: "20px",
  },
}));

const searchMenu = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "user",
    label: "User",
  },
];

const SearchBar = ({ searchBy, setSearchBy, searchInput, setSearchInput }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.searchField}
        id="search"
        label="Search"
        type="search"
        variant="outlined"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />

      <TextField
        className={classes.searchSelect}
        id="select"
        select
        value={searchBy}
        onChange={(event) => setSearchBy(event.target.value)}
        helperText="search"
      >
        {searchMenu.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
};

export default SearchBar;
