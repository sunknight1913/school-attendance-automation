import type { NextFunction, Request, Response } from 'express';

const roleOrder = {
  super_admin: 5,
  school_admin: 4,
  principal: 3,
  teacher: 2,
  parent: 1,
} as const;

export function requireRole(...allowedRoles: Array<string>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (allowedRoles.includes(userRole)) {
      return next();
    }

    const canEscalate = roleOrder[userRole as keyof typeof roleOrder] >= roleOrder[allowedRoles[0] as keyof typeof roleOrder] || false;
    if (canEscalate && allowedRoles.length > 0) {
      return next();
    }

    return res.status(403).json({ message: 'Forbidden: role not allowed' });
  };
}
