import { useState } from "react";
import "./table.css";
const Table = () => {
  const [row, setRow] = useState(9);
  const [column, setColumn] = useState(9);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRow(e.target.row.value);
    setColumn(e.target.column.value);
  };
  // ** Case table 1 **
  let count = row;
  const createTable = () => {
    let table = [];
    for (let i = 0; i < row; i++) {
      count--;
      let item = [];
      for (let j = 0; j < column; j++) {
        if (i === j) {
          item.push(<td>{j + 1}</td>);
        } else if (j === count) {
          item.push(<td>{j + 1} </td>);
        } else {
          item.push(<td>{``}</td>);
        }
      }
      table.push(<tr>{item}</tr>);
    }
    return table;
  };

  // ** Case table 2 **
  let count2 = row;
  const createTableIndex = () => {
    let tableIndex = [];
    for (let i = 0; i < row; i++) {
      count2--;
      let item = [];
      for (let j = 0; j < column; j++) {
        if (i === j) {
          item.push(
            <td>
              {i},{j}
            </td>
          );
        } else if (j === count2) {
          item.push(
            <td>
              {i},{j}
            </td>
          );
        } else {
          item.push(<td>{``}</td>);
        }
      }
      tableIndex.push(<tr>{item}</tr>);
    }
    return tableIndex;
  };
  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Row
            <input defaultValue={row} type="number" name="row"></input>
          </label>
          <br />
          <label>
            Column
            <input defaultValue={column} type="number" name="column"></input>
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
      {/* Case 1 */}
      <table>
        <tbody>{createTable()}</tbody>
      </table>
      {/* Case 2 */}
      <table>
        <tbody>{createTableIndex()}</tbody>
      </table>
    </div>
  );
};

export default Table;
