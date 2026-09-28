const childRows = [
  { name: 'Vihaan', rollNo: '12', className: 'Grade 8', percentage: '92%' },
  { name: 'Diya', rollNo: '08', className: 'Grade 6', percentage: '89%' }
];

export default function ParentDashboard() {
  return (
    <div className="app-shell">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        <div>
          <div style={{ color: '#dfe8ff' }}>Hello, Parent</div>
          <h1 className="page-title">Student Attendance</h1>
        </div>
        <button className="secondary-btn">Add Child</button>
      </header>

      <div className="card-grid" style={{ marginBottom: 24 }}>
        <div className="glass-panel stat-card">
          <div>Today</div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>92%</div>
        </div>
        <div className="glass-panel stat-card">
          <div>Yesterday</div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>88%</div>
        </div>
        <div className="glass-panel stat-card">
          <div>Last 3 Days</div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>90%</div>
        </div>
      </div>

      <div className="glass-panel" style={{ borderRadius: 20, padding: 20 }}>
        <h3 style={{ marginTop: 0 }}>Children</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Class</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {childRows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.rollNo}</td>
                <td>{row.className}</td>
                <td>{row.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
