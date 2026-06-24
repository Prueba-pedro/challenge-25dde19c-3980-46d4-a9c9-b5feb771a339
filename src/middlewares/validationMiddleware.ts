import { Request, Response, NextFunction } from 'express';
import { Loan } from '../models/loanModel';

export const validateLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loan: Loan = req.body;
    if (loan.amount <= 0 || loan.interestRate <= 0 || loan.dueDate <= loan.startDate) {
      throw new Error('Invalid loan data');
    }
    next();
  } catch (error) {
    next(error);
  }
};