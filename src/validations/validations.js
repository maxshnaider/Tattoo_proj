import { validationMessages } from "../constants/textContent";

export const regEx = {
    name: /^[а-яА-ЯёЁa-zA-Z\s]+$/,
    phone: /^\d{1,15}$/,
};

export const validations = {
    userName: {
        rule: regEx.name,
        error: validationMessages.name
    },
    phone: {
        rule: regEx.phone,
        error: validationMessages.phone
    }
}
