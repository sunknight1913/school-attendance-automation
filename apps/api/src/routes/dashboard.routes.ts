import { Router } from 'express';

const router = Router();

router.get('/principal', async (_req, res) => {
  res.json({
    totalStudents: 480,
    present: 402,
    absent: 32,
    approvedLeave: 14,
    pendingClasses: 6
  });
});

router.get('/teacher', async (_req, res) => {
  res.json({
    present: 38,
    absent: 4,
    attendanceRate: '90.5%'
  });
});

router.get('/parent', async (_req, res) => {
  res.json({
    today: '92%',
    yesterday: '88%',
    last3Days: '90%'
  });
});

router.get('/super-admin', async (_req, res) => {
  res.json({
    schools: 120,
    teachers: 4000,
    students: 48000
  });
});

export default router;
