import React from "react";

function ColumnGrid({ profile }) {
  if (!profile || !profile.columns) {
    return <p>No column data available</p>;
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>📊 Table Overview</h3>
      <p><b>Table:</b> {profile.table_name}</p>
      <p><b>Rows:</b> {profile.row_count}</p>
      <p><b>Columns:</b> {profile.column_count}</p>

      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{ marginTop: "20px", width: "100%" }}
      >
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>Column Name</th>
            <th>Data Type</th>
            <th>Null %</th>
            <th>Uniqueness %</th>
          </tr>
        </thead>

        <tbody>
          {profile.columns.map((col, index) => (
            <tr key={index}>
              <td>{col.column_name}</td>
              <td>{col.data_type}</td>
              <td>{col.null_percentage.toFixed(2)}%</td>
              <td>{col.uniqueness_percentage.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ColumnGrid;