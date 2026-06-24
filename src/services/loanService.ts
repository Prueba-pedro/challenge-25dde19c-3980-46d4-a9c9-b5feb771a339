import { Loan } from '../models/loanModel';
import { auditLog } from '../utils/auditLogger';

const loans: Loan[] = [];

export const createLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loan: Loan = req.body;
    loans.push(loan);
    auditLog('create', loan);
    res.status(201).send(loan);
  } catch (error) {
    next(error);
  }
};

export const getLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loan = loans.find(l => l.id === req.params.id);
    if (!loan) {
      res.status(404).send({ message: 'Loan not found' });
    } else {
      res.send(loan);
    }
  } catch (error) {
    next(error);
  }
};

export const updateLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loanIndex = loans.findIndex(l => l.id === req.params.id);
    if (loanIndex === -1) {
      res.status(404).send({ message: 'Loan not found' });
    } else {
      loans[loanIndex] = {...loans[loanIndex],...req.body };
      auditLog('update', loans[loanIndex]);
      res.send(loans[loanIndex]);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteLoan = (req: Request, res: Response, next: NextFunction) => {
  try {
    const loanIndex = loans.findIndex(l => l.id === req.params.id);
    if (loanIndex === -1) {
      res.status(404).send({ message: 'Loan not found' });
    } else {
      const deletedLoan = loans.splice(loanIndex, 1)[0];
      auditLog('delete', deletedLoan);
      res.send(deletedLoan);
    }
  } catch (error) {
    next(error);
  }
};