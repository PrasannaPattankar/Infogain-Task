import React from "react";

const SearchInput = ({ searchText = "", handleChange, onSearch }) => (
  <div style={{ flexDirection: "row" }}>
    Search:{" "}
    <input
      style={{ marginLeft: 5 }}
      type="text"
      placeholder="Type to search..."
      value={searchText}
      onChange={(e) => handleChange(e.target.value)}
    />
    <button type="button" onClick={() => onSearch()}>
      Search
    </button>
  </div>
);

export default SearchInput;
