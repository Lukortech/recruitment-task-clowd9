import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UserTable from "./components/Table/Table";

import userData from "./db/mock";
import searchItem from "./utils/search";

function App() {
  const [searchBy, setSearchBy] = useState("all");
  const [searchInput, setSearchInput] = useState("");

  const data = searchItem(userData, searchBy, searchInput); // pofiltrowane data z funkcji search

  return (
    <>
      <SearchBar
        searchBy={searchBy}
        setSearchBy={setSearchBy}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <UserTable data={data} />
    </>
  );
}

export default App;
