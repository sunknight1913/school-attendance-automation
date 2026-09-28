import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const roles = ['Principal', 'Teacher', 'Parent', 'Admin', 'S.Admin'];

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('Principal');
  const [schoolId, setSchoolId] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const routeMap: Record<string, string> = {
      Principal: '/principal',
      Teacher: '/teacher',
      Parent: '/parent',
      Admin: '/admin',
      'S.Admin': '/super-admin'
    };

    navigate(routeMap[role] || '/principal');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'linear-gradient(135deg, #0b1737 0%, #1f275a 35%, #4f3f8a 100%)'
    }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: 500, borderRadius: 26, padding: 32 }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 1.6, opacity: 0.8 }}>School Attendance</div>
          <h1 className="page-title" style={{ marginTop: 12 }}>Automation System</h1>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
          {roles.map((item) => (
            <button
              key={item}
              className={role === item ? 'primary-btn' : 'secondary-btn'}
              onClick={() => setRole(item)}
              type="button"
              style={{
                opacity: role === item ? 1 : 0.8,
                minWidth: 90
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <form className="form-grid" onSubmit={handleSubmit}>
          <input className="input-style" value={schoolId} onChange={(e) => setSchoolId(e.target.value)} placeholder="School ID" />
          <input className="input-style" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="ID" />
          <input type="password" className="input-style" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

          <div style={{ display: 'flex', gap: 12 }}>
            <button className="primary-btn" type="submit" style={{ flex: 1 }}>
              Sign In
            </button>
            <button className="secondary-btn" type="button" style={{ flex: 1 }}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
