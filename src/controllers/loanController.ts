import { Router } from 'express';
import { createLoan, getLoan, updateLoan, deleteLoan } from '../services/loanService';
import { validateLoan } from '../middlewares/validationMiddleware';

const router = Router();

router.post('/', validateLoan, (req: Request, res: Response, next: NextFunction) => createLoan(req, res, next));
router.get('/:id', (req: Request, res: Response, next: NextFunction) => getLoan(req, res, next));
router.put('/:id', validateLoan, (req: Request, res: Response, next: NextFunction) => updateLoan(req, res, next));
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => deleteLoan(req, res, next));

export { router as loanRouter };