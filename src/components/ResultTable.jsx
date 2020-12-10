import React from "react";
import List from "./List";

const ResultTable = ({ data = {} }) => (
  <React.Fragment>
    <div className="table-responsive">
      <table className="result-table">
        {data.length !== 0 && (
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        )}

        {data.map((item, i) => {
          return <List item={item} key={i} />;
        })}
      </table>
      {data.length === 0 && <span>Sorry No Matches Found!</span>}
    </div>
  </React.Fragment>
);

export default ResultTable;
