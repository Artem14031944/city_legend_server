import { Stock } from "../models/models.js";
import ApiError from '../error/ApiError.js';

class StockService {
    async create() {
        
        const stocks = this.getAll();
        return stocks;
    };

    async update(reqBody, id) {
        const stock = await Stock.findOne({ where: { id } });
        if (!stock) {
            throw ApiError.badRequest('Такая заявка отсусвует');
        }; 

        await Stock.update({ ...reqBody }, { where: { id } });

        const stocks = this.getAll();
        return stocks;
    };

    async getAll() {
        const stocks = await Stock.findAll();
        return stocks;
    };

    async delete(id) {
        await Stock.destroy({ where: { id } });

        const stocks = await this.getAll();
        return stocks;
    };
};

export default new StockService();