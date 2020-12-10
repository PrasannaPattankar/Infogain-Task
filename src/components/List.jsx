import React from "react";

const List = ({item={}}) => (
  <tr>
    <td>{item._id}</td>
    <td>{item.name}</td>
    <td>{item.gender}</td>
  </tr>
);

export default List;
