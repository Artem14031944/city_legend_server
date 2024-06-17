import { validateStockCreateFields } from '../validators/StockValdate.js'
import { Router } from "express";
import StockController from "../controllers/StockController.js";

const router = new Router();

router.get('/get_stocks', StockController.getAll);
router.post('/creat', validateStockCreateFields, StockController.creat);
router.patch('/resolved/:id', StockController.update);
router.delete('/delete/:id', StockController.delete)

export default router;