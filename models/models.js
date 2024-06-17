import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Stock = sequelize.define('stock', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(100) },
    number_present: { type: DataTypes.INTEGER },
    number_days_take_present: { type: DataTypes.INTEGER },
    number_days_receive_present: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING(500) },
    numbers_cards: { type: DataTypes.STRING(5000) },
    present_id: { type: DataTypes.INTEGER }
});

export { Stock };