const teacherRows = [
  { name: 'Ms. Kavya', subject: 'Mathematics', className: 'Grade 7-A', status: 'Active' },
  { name: 'Mr. Raj', subject: 'Science', className: 'Grade 8-B', status: 'Active' },
  { name: 'Mrs. Nisha', subject: 'English', className: 'Grade 9-A', status: 'Inactive' }
];

export default function TeacherDashboard() {
  return (
    <div className="app-shell">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <div style={{ color: '#dfe8ff' }}>Hello, Teacher</div>
          <h1 className="page-title">Assigned Classroom</h1>
        </div>
        <button className="secondary-btn">Logout</button>
      </header>

      <div className="layout-two-col">
        <div className="glass-panel" style={{ borderRadius: 20, padding: 20 }}>
          <h3 style={{ marginTop: 0 }}>Upload Attendance</h3>
          <div className="form-grid">
            <input className="input-style" placeholder="Select class" />
            <input className="input-style" placeholder="Section" />
            <input className="input-style" placeholder="Upload image / camera capture" />
            <button className="primary-btn">Submit</button>
          </div>
        </div>

        <div className="glass-panel" style={{ borderRadius: 20, padding: 20 }}>
          <h3 style={{ marginTop: 0 }}>Class Summary</h3>
          <div className="card-grid">
            <div className="stat-card glass-panel">
              <div>Present</div>
              <div style={{ fontSize: 26, fontWeight: 700 }}>38</div>
            </div>
            <div className="stat-card glass-panel">
              <div>Absent</div>
              <div style={{ fontSize: 26, fontWeight: 700 }}>4</div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ marginTop: 20, borderRadius: 20, padding: 20 }}>
        <h3 style={{ marginTop: 0 }}>Assigned Teachers</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {teacherRows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.subject}</td>
                <td>{row.className}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
