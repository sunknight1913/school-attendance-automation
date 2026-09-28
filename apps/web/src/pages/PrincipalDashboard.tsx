const summaryCards = [
  { label: 'Total Students', value: '480' },
  { label: 'Present', value: '402' },
  { label: 'Absent', value: '32' },
  { label: 'Approved Leave', value: '14' }
];

const tableRows = [
  { student: 'Aarav', className: 'Grade 7', status: 'Absent', approve: 'Review' },
  { student: 'Meera', className: 'Grade 7', status: 'Present', approve: '—' },
  { student: 'Rohit', className: 'Grade 8', status: 'Approved', approve: 'Verified' },
  { student: 'Anya', className: 'Grade 8', status: 'Present', approve: '—' }
];

export default function PrincipalDashboard() {
  return (
    <div className="app-shell">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <div style={{ color: '#dfe8ff' }}>Hello, Principal</div>
          <h1 className="page-title">School Attendance Dashboard</h1>
        </div>
        <button className="primary-btn">Create School Admin</button>
      </header>

      <div className="card-grid" style={{ marginBottom: 24 }}>
        {summaryCards.map((card) => (
          <div key={card.label} className="glass-panel stat-card">
            <div style={{ color: '#dfe6ff', fontSize: 14 }}>{card.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 12 }}>{card.value}</div>
          </div>
        ))}
      </div>

      <div className="layout-two-col">
        <div className="glass-panel" style={{ borderRadius: 20, padding: 20 }}>
          <div className="info-row" style={{ marginBottom: 14 }}>
            <h3 style={{ margin: 0 }}>Today Attendance</h3>
            <button className="secondary-btn">View all</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Class</th>
                <th>Status</th>
                <th>Approve</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.student}>
                  <td>{row.student}</td>
                  <td>{row.className}</td>
                  <td>{row.status}</td>
                  <td>{row.approve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass-panel" style={{ borderRadius: 20, padding: 20 }}>
          <h3 style={{ marginTop: 0 }}>Announcements</h3>
          <textarea
            rows={8}
            className="input-style"
            placeholder="Upload photo, text message, or voice note"
            style={{ minHeight: 190, resize: 'vertical' }}
          />
          <button className="primary-btn" style={{ marginTop: 12, width: '100%' }}>Submit</button>
        </div>
      </div>
    </div>
  );
}
