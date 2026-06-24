import { createLoan, getLoan, updateLoan, deleteLoan } from '../services/loanService';
import { Loan } from '../models/loanModel';

describe('Loan Service', () => {
  let loan: Loan;

  beforeEach(() => {
    loan = {
      id: '1',
      amount: 1000,
      interestRate: 5,
      startDate: new Date('2023-01-01'),
      dueDate: new Date('2023-12-31')
    };
  });

  it('should create a loan', () => {
    createLoan({ body: loan } as any, {} as any, () => {});
    expect(getLoan({ params: { id: loan.id } } as any, {} as any, () => {})).toEqual(loan);
  });

  it('should get a loan', () => {
    createLoan({ body: loan } as any, {} as any, () => {});
    expect(getLoan({ params: { id: loan.id } } as any, {} as any, () => {})).toEqual(loan);
  });

  it('should update a loan', () => {
    createLoan({ body: loan } as any, {} as any, () => {});
    const updatedLoan = {...loan, amount: 2000 };
    updateLoan({ params: { id: loan.id }, body: updatedLoan } as any, {} as any, () => {});
    expect(getLoan({ params: { id: loan.id } } as any, {} as any, () => {})).toEqual(updatedLoan);
  });

  it('should delete a loan', () => {
    createLoan({ body: loan } as any, {} as any, () => {});
    deleteLoan({ params: { id: loan.id } } as any, {} as any, () => {});
    expect(() => getLoan({ params: { id: loan.id } } as any, {} as any, () => {})).toThrow('Loan not found');
  });
});