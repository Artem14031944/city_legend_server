import { body } from "express-validator";

const validateFieldsNotEmpty = (field, errorMessage) => body(field).notEmpty().trim().withMessage(errorMessage);

const validateStockCreateFields = Object.values({
  name: validateFieldsNotEmpty('name', 'Введите название рассылки'),
  number_present: validateFieldsNotEmpty('number_present', 'Укажите количество подарков'),
  number_days_take_present: validateFieldsNotEmpty('number_days_take_present', 'Укажите количество дней на взятие подарка'),
  number_days_receive_present: validateFieldsNotEmpty('number_days_receive_present', 'Укажите количество дней на получение подарка'),
  description: validateFieldsNotEmpty('description', 'Опишите акциию'),
  numbers_cards: validateFieldsNotEmpty('numbers_cards', 'Введите номер карты'),
  present_id: validateFieldsNotEmpty('present_id', 'Выберите подарок'),
});

export { validateStockCreateFields };