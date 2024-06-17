import { validationResult } from 'express-validator';
import StockService from "../service/StockService.js";

class StockController {
    async creat(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest(errors.array().map(err => err.msg).join('\n')));
            };

            const {} = req.body;
            const stocks = await StockService.create();

            return res.json({ presents });
        } catch(err) {
            next(err);
        }
    };

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const stocks = await StockService.update(req.body, id);

            return res.json({ message: 'Выполнено успешно', stocks });
        } catch(err) {
            next(err);
        }
    };

    async getAll(req, res, next) {
        try {
            const presents = [{ id: 1, name: '1' }];
            const stocks = await StockService.getAll();

            return res.json({ presents, stocks });
        } catch(err) {
            next(err);
        }
    };

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const stocks = await StockService.delete(id);

            return res.json(stocks);
        } catch(err) {
            next(err);
        }
    };
};

export default new StockController();