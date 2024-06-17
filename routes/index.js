import { Router } from "express";
import StockRouter from './StockRouter.js';

const router = new Router();

router.use('/stock', StockRouter);

export default router;