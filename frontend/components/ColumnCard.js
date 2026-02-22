function ColumnCard({ column }) {
  return (
    <div className="card">
      <h3>{column.column_name}</h3>
      <p><strong>Type:</strong> {column.data_type}</p>
      <p><strong>Null %:</strong> {column.null_percentage}</p>
      <p><strong>Uniqueness %:</strong> {column.uniqueness_percentage}</p>
    </div>
  );
}

export default ColumnCard;