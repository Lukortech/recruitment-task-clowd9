const sortArrayObj = (arr, prop1, prop2) => {
  const sorted = [...arr].sort((a, b) => {
    const one = a[prop1] ? a[prop1] : "" + a[prop2] ? a[prop2] : "";
    const two = b[prop1] ? b[prop1] : "" + b[prop2] ? b[prop2] : "";
    return one > two ? 1 : -1;
  });
  return sorted;
};

export default sortArrayObj;
