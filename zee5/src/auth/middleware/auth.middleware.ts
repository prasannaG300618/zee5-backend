import { NestMiddleware, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../constrants';

@Injectable()
export class authMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.query['token'] as string;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const decoded = jwt.verify(token, jwtConstants.secret);
      console.log(decoded)
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  }
}
