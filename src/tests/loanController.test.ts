import { Router } from 'express';
import request from 'supertest';
import { loanRouter } from '../controllers/loanController';
import { Loan } from '../models/loanModel';

describe('Loan Controller', () => {
  let app: Router;
  let loan: Loan;

  beforeEach(() => {
    app = loanRouter;
    loan = {
      id: '1',
      amount: 1000,
      interestRate: 5,
      startDate: new Date('2023-01-01'),
      dueDate: new Date('2023-12-31')
    };
  });

  it('should create a loan', async () => {
    const response = await request(app)
     .post('/')
     .send(loan);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(loan);
  });

  it('should get a loan', async () => {
    const response = await request(app)
     .get(`/${loan.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(loan);
  });

  it('should update a loan', async () => {
    const updatedLoan = {...loan, amount: 2000 };
    const response = await request(app)
     .put(`/${loan.id}`)
     .send(updatedLoan);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedLoan);
  });

  it('should delete a loan', async () => {
    const response = await request(app)
     .delete(`/${loan.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(loan);
  });
});