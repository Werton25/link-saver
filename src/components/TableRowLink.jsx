import React from 'react';

const TableRowLink = (props) => (
  <tr key={props.id}>
    <th scope="row">{props.id}</th>
    <td>{props.value}</td>
  </tr>
);

export default TableRowLink;
