export const getTableData = () => {
  return fetch("http://localhost:8000/table-data")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else console.error("Something went wrong");
    })
    .catch((error) => console.error(error));
};
