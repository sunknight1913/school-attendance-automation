const adminStats = [
  { label: 'Teachers', value: '40' },
  { label: 'Students', value: '480' },
  { label: 'Classes', value: '18' },
  { label: 'Pending', value: '6' }
];

export default function AdminDashboard() {
  return (
    <div className="app-shell">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <div style={{ color: '#dfe8ff' }}>School Admin</div>
          <h1 className="page-title">School Management</h1>
        </div>
        <button className="primary-btn">Add Student / Teacher</button>
      </header>

      <div className="card-grid" style={{ marginBottom: 24 }}>
        {adminStats.map((card) => (
          <div key={card.label} className="glass-panel stat-card">
            <div>{card.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 10 }}>{card.value}</div>
          </div>
        ))}
      </div>

      <div className="layout-two-col">
        <div className="glass-panel" style={{ borderRadius: 20, padding: 20 }}>
          <h3 style={{ marginTop: 0 }}>Admin Controls</h3>
          <div className="form-grid">
            <input className="input-style" placeholder="Upload student list or image" />
            <input className="input-style" placeholder="Upload teacher list or image" />
            <input className="input-style" placeholder="API provider / key" />
            <button className="primary-btn">Connect</button>
          </div>
        </div>

        <div className="glass-panel" style={{ borderRadius: 20, padding: 20 }}>
          <h3 style={{ marginTop: 0 }}>School Feed</h3>
          <textarea rows={8} className="input-style" placeholder="Announcement, text, voice, or file" style={{ resize: 'vertical' }} />
          <button className="primary-btn" style={{ marginTop: 12, width: '100%' }}>Submit</button>
        </div>
      </div>
    </div>
  );
}
