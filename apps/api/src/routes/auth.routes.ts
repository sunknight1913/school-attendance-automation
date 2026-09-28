import { Router } from 'express';

const router = Router();

router.post('/login', async (_req, res) => {
  res.json({ message: 'Login successful', token: 'demo-token' });
});

router.post('/logout', async (_req, res) => {
  res.json({ message: 'Logout successful' });
});

router.post('/forgot-password', async (_req, res) => {
  res.json({ message: 'Password reset sent' });
});

router.post('/reset-password', async (_req, res) => {
  res.json({ message: 'Password reset successful' });
});

router.get('/me', async (_req, res) => {
  res.json({ id: 'USR-001', role: 'principal', schoolId: 'SCH-001', name: 'Demo Principal' });
});

export default router;
