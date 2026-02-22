import React, { useState } from "react";
import UploadBox from "./components/UploadBox";
import ColumnGrid from "./components/ColumnGrid";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📘 Intelligent Data Dictionary</h1>
      <p>Upload a CSV file to auto-generate column documentation.</p>

      <UploadBox setResult={setResult} setLoading={setLoading} />

      {loading && <p>⏳ Processing file...</p>}

      {result && (
        <>
          <p><b>Table:</b> {result.table_name}</p>
          <p><b>Rows:</b> {result.row_count}</p>

          <ColumnGrid columns={result.columns} />
        </>
      )}
    </div>
  );
}

export default App;