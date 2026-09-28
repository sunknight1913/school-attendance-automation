import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {
  res.json({
    students: [
      { id: 'ST-1001', name: 'Aarav', className: 'Grade 7', section: 'A', status: 'present' },
      { id: 'ST-1002', name: 'Meera', className: 'Grade 7', section: 'A', status: 'absent' }
    ]
  });
});

router.get('/:studentId', async (req, res) => {
  res.json({
    id: req.params.studentId,
    name: 'Aarav',
    className: 'Grade 7',
    section: 'A',
    status: 'present'
  });
});

router.post('/', async (req, res) => {
  res.status(201).json({ message: 'Student created successfully', body: req.body });
});

router.patch('/:studentId', async (req, res) => {
  res.json({ message: `Student ${req.params.studentId} updated successfully`, body: req.body });
});

router.delete('/:studentId', async (req, res) => {
  res.json({ message: `Student ${req.params.studentId} deleted successfully` });
});

export default router;
