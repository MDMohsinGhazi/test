import { useState } from "react";
import "./App.css";
import useFetch from "./useFetch";
import Table from "./Table";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const [pageSize, setPageSize] = useState(10);
  const [currPage, setCurrPage] = useState(1);

  const totalNumofRecod = data.length;
  const totalPage = Math.ceil(totalNumofRecod / pageSize);

  const end = currPage * pageSize;
  const start = end - pageSize;

  const currData = data.slice(start, end);
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>{error.message || "Somthing went wrong"}</div>;
  }
  return (
    <div className="App">
      <div>Select recodes per page</div>
      <select
        value={pageSize}
        onChange={(evt) => {
          setPageSize(evt.target.value);
          setCurrPage(1);
        }}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <Table posts={currData} />

      <div>
        <button
          onClick={() => setCurrPage(currPage - 1)}
          disabled={currPage === 1}
        >
          Prev
        </button>
        <button
          onClick={() => setCurrPage(currPage + 1)}
          disabled={currPage === totalPage}
        >
          Next
        </button>
      </div>
      <div>
        {currPage}/{totalPage}
      </div>
    </div>
  );
}

export default App;
