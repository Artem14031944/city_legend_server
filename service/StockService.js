import { Stock } from "../models/models.js";
import ApiError from '../error/ApiError.js';

class StockService {
    async create(newStock) {
        const stock = await Stock.create({ ...newStock });
        if (!stock) {
            throw ApiError.badRequest('Не удалось создать акциию');
        };

        const stocks = this.getAll();
        return stocks;
    };

    async update(reqBody, id) {
        const stock = await Stock.findOne({ where: { id } });
        if (!stock) {
            throw ApiError.badRequest('Такая акциия отсусвует');
        }; 

        await Stock.update({ ...reqBody }, { where: { id } });

        const stocks = this.getAll();
        return stocks;
    };

    async getAll({ limit, page }) {
        page = +page || 1;
        limit = +limit || 9;
        let offset = page * limit - limit;

        const stocks = await Stock.findAndCountAll({ limit, offset });
        return stocks;
    };

    async delete(id) {
        await Stock.destroy({ where: { id } });

        const stocks = await this.getAll();
        return stocks;
    };
};

export default new StockService();