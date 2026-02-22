const API_BASE = "http://127.0.0.1:8000";

export async function uploadCSV(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Backend error");
  }

  return res.json();
}