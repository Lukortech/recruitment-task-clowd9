const searchHelper = (data, searchInput) => {
  return data.filter((item) =>
    (item["firstName"] + item["lastName"])
      .toLowerCase()
      .includes(searchInput.toLowerCase())
  );
};

const searchItem = (data, searchBy, searchInput) => {
  switch (searchBy) {
    case (searchBy = "all"): {
      return searchInput ? searchHelper(data, searchInput) : data;
    }
    case (searchBy = "admin"): {
      return searchInput
        ? searchHelper(
            data.filter((item) => item.accountType.includes("Admin")),
            searchInput
          )
        : data;
    }
    case (searchBy = "user"): {
      return searchInput
        ? searchHelper(
            data.filter((item) => item.accountType.includes("User")),
            searchInput
          )
        : data;
    }
    default:
      return data;
  }
};

export default searchItem;
