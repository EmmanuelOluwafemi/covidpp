import React from 'react';


const TableData = ({states}) => {

  const renderTableHeader = () => {
    let header = ['States', 'No. of Cases', 'Admitted Cases', 'No. Discharged', 'No. of Deaths']
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

  const renderTableData = () => {
    return states.map((data, index) => {
       const {state, confirmedCases, casesOnAdmission, discharged, death } = data
       return (
          <tr key={index}>
             <td>{state}</td>
             <td>{confirmedCases}</td>
             <td>{casesOnAdmission}</td>
             <td>{discharged}</td>
             <td>{death}</td>
          </tr>
       )
    })
 }

 return (
  <div>
     <h1 id='title'>Results By States</h1>
     <table id='states'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
     </table>
  </div>
)
    
}

export default TableData;
