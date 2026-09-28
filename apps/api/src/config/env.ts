import { z } from 'zod';

export const loginSchema = z.object({
  schoolId: z.string().min(1),
  id: z.string().min(1),
  password: z.string().min(1),
  role: z.string().optional()
});

export const studentSchema = z.object({
  schoolId: z.string().min(1),
  name: z.string().min(1),
  rollNo: z.string().optional(),
  className: z.string().min(1),
  section: z.string().min(1),
  parentName: z.string().optional()
});
