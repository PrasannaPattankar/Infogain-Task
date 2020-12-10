import React, { useState } from "react";
import "./App.css";
import dataList from "./search-list.json";
import SearchInput from "./components/SearchInput";
import ResultTable from "./components/ResultTable";

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
  const [loader, setLoader] = useState(false);

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
  };
  const onSearch = () => {
    setLoader(true);
    setTimeout(() => {
      filterData(searchText);
      setLoader(false);
    }, 500);
  };
  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter((item) =>
        item.name.toLowerCase().includes(lowercasedValue)
      );
      setData(filteredData);
    }
  };

  return (
    <div className="App">
      <SearchInput
        onSearch={onSearch}
        searchText={searchText}
        handleChange={handleChange}
      />
      {loader ? <h1>Featching Data ....</h1> : <ResultTable data={data} />}
    </div>
  );
}

export default App;
