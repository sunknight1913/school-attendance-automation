import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {
  res.json({ attendance: [
    { id: 'AT-001', studentId: 'ST-1001', date: '2026-09-28', status: 'present' },
    { id: 'AT-002', studentId: 'ST-1002', date: '2026-09-28', status: 'absent' }
  ] });
});

router.get('/:id', async (req, res) => {
  res.json({ id: req.params.id, studentId: 'ST-1001', status: 'present' });
});

router.post('/', async (req, res) => {
  const { fileName, schoolId } = req.body;

  if (!fileName || !schoolId) {
    return res.status(400).json({ message: 'fileName and schoolId are required' });
  }

  return res.status(202).json({
    message: 'Attendance upload accepted for processing',
    jobId: 'JOB-001',
    status: 'queued'
  });
});

export default router;
