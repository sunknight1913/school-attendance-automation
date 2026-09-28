import type { Request, Response } from 'express';
import { loginSchema } from '../config/env.js';

export async function login(_req: Request, res: Response) {
  return res.json({
    message: 'Login successful',
    token: 'demo-token',
    user: {
      id: 'USR-001',
      role: 'principal',
      schoolId: 'SCH-001',
      name: 'Demo Principal'
    }
  });
}

export async function logout(_req: Request, res: Response) {
  return res.json({ message: 'Logged out successfully' });
}

export async function getCurrentUser(_req: Request, res: Response) {
  return res.json({
    id: 'USR-001',
    role: 'principal',
    schoolId: 'SCH-001',
    name: 'Demo Principal'
  });
}

export async function forgotPassword(_req: Request, res: Response) {
  return res.json({ message: 'Password reset email sent' });
}

export async function resetPassword(_req: Request, res: Response) {
  return res.json({ message: 'Password reset successful' });
}
