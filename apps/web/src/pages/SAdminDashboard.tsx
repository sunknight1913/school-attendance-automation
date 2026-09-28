const schoolRows = [
  { name: 'School 1', id: 'SCH-001', principal: 'Anil K', status: 'Active' },
  { name: 'School 2', id: 'SCH-002', principal: 'Rhea S', status: 'Pending' },
  { name: 'School 3', id: 'SCH-003', principal: 'Vikram P', status: 'Active' }
];

export default function SAdminDashboard() {
  return (
    <div className="app-shell">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <div style={{ color: '#dfe8ff' }}>Super Admin</div>
          <h1 className="page-title">Platform Control</h1>
        </div>
        <button className="primary-btn">AI Assistance Mode</button>
      </header>

      <div className="card-grid" style={{ marginBottom: 24 }}>
        <div className="glass-panel stat-card">
          <div>Schools</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>120</div>
        </div>
        <div className="glass-panel stat-card">
          <div>Teachers</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>4000</div>
        </div>
        <div className="glass-panel stat-card">
          <div>Students</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>48000</div>
        </div>
      </div>

      <div className="glass-panel" style={{ borderRadius: 20, padding: 20 }}>
        <h3 style={{ marginTop: 0 }}>School List</h3>
        <table>
          <thead>
            <tr>
              <th>School</th>
              <th>ID</th>
              <th>Principal</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {schoolRows.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.id}</td>
                <td>{row.principal}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
