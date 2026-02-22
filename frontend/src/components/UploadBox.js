import { useState } from "react";
import ColumnGrid from "./ColumnGrid";

function UploadBox() {
  const [file, setFile] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    if (!file) return alert("Select a CSV");

    setLoading(true);
    setProfile(null);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setProfile(data.profile);
    setLoading(false);
  };

  return (
    <div>
      <h2>Upload CSV</h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={uploadFile}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {profile && <ColumnGrid profile={profile} />}
    </div>
  );
}

export default UploadBox;