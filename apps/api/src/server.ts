import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import studentRoutes from './routes/students.routes.js';
import attendanceRoutes from './routes/attendance.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'school-attendance-api' });
});

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
