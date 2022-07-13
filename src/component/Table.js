import React from "react";
import "./table.css";
const table = () => {
  // ** Case table 1 **
  let count = 10;
  const createTable = () => {
    let table = [];
    for (let i = 1; i < 10; i++) {
      count--;
      let item = [];
      for (let j = 1; j < 10; j++) {
        if (i === j) {
          item.push(<td>{j}</td>);
        } else if (j === count) {
          item.push(<td>{j} </td>);
        } else {
          item.push(<td>{``}</td>);
        }
      }
      table.push(<tr>{item}</tr>);
    }
    return table;
  };

  // ** Case table 2 **

  // let count2 = 9;
  // const createTable2 = () => {
  //   let table = [];
  //   for (let i = 0; i < 9; i++) {
  //     count2--;
  //     let item = [];
  //     for (let j = 0; j < 9; j++) {
  //       if (i === j) {
  //         item.push(
  //           <td>
  //             {i},{j}
  //           </td>
  //         );
  //       } else if (j === count2) {
  //         item.push(
  //           <td>
  //             {i},{j}
  //           </td>
  //         );
  //       } else {
  //         item.push(<td>{``}</td>);
  //       }
  //     }
  //     table.push(<tr>{item}</tr>);
  //   }
  //   return table;
  // };
  return (
    <div>
      {/* Case 1 */}
      <table>
        <tbody>{createTable()}</tbody>
      </table>
      {/* Case 2 */}
      {/* <table>
        <tbody>{createTable2()}</tbody>
      </table> */}
    </div>
  );
};

export default table;
