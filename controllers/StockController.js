import { validationResult } from 'express-validator';
import StockService from "../service/StockService.js";
import ApiError from '../error/ApiError.js';

class StockController {
    async creat(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest(errors.array().map(err => err.msg).join('\n')));
            };

            const { 
                name, 
                number_present, 
                number_days_take_present, 
                number_days_receive_present,
                description,
                numbers_cards,
                present_id,
            } = req.body;
            
            const stocks = await StockService.create({
                name, 
                number_present, 
                number_days_take_present, 
                number_days_receive_present,
                description,
                numbers_cards,
                present_id, 
            });

            return res.json({ stocks });
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
            let { limit, page } = req.query;
            const presents = [{ id: 1, name: '1' }];
            const stocks = await StockService.getAll({ limit, page });

            return res.json({ presents, stocks });
        } catch(err) {
            next(err);
        }
    };

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const stocks = await StockService.delete(id);

            return res.json({ message: 'Акция удалена', stocks});
        } catch(err) {
            next(err);
        }
    };
};

export default new StockController();